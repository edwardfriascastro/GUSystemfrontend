import type { ApolloClientOptions } from '@apollo/client/core';
import { ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { LocalStorage } from 'quasar';
import { ErrorResponse, onError } from 'apollo-link-error';

const Notify = require('quasar/src/plugins/Notify').default;

import introspectionResult from 'src/graphql/generated/graphql.schema.json';
import { buildClientSchema, IntrospectionQuery } from 'graphql/utilities';
import { ParsingFunctionsObject, withScalars } from 'apollo-link-scalars';
import { Router } from 'vue-router';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: getHeaders(),
  });

  return forward(operation);
});

function getHeaders() {
  const headers: { Authorization?: string; 'Content-Type'?: string } = {};
  const token = LocalStorage.getItem('access-token');
  if (token) {
    headers['Authorization'] = `${token}`;
  }
  headers['Content-Type'] = 'application/json';
  return headers;
}

const typesMap = {
  // example of scalar type, which will parse the string into a custom class CustomDate which receives a Date object
  DateTime: {
    serialize: (parsed: Date | null) => parsed && parsed.toISOString(),
    parseValue: (raw: string) => raw && new Date(raw),
  } as ParsingFunctionsObject,
};

export function getClientOptions(router: Router) {
  const schema = buildClientSchema(
    introspectionResult as unknown as IntrospectionQuery
  );

  const handlingErrorsMiddleware = onError((error: ErrorResponse) => {
    if (error.graphQLErrors) {
      for (const graphQLError of error.graphQLErrors) {
        Notify.create({
          color: 'negative',
          icon: 'warning',
          message: graphQLError.message,
          position: 'top-right',
          timeout: 3000,
        });
        if (graphQLError.extensions.code === 'UNAUTHENTICATED') {
          LocalStorage.remove('access-token');
          router.push('/login');
        }
        if (graphQLError.extensions.code === 'UNAUTHORIZED') {
          router.push('/');
        }
      }
    }
  });

  return <ApolloClientOptions<unknown>>Object.assign(
    <ApolloClientOptions<unknown>>{
      link: ApolloLink.from([
        withScalars({ schema, typesMap }),
        handlingErrorsMiddleware,
        authMiddleware.concat(
          createHttpLink({
            uri:
              process.env.GRAPHQL_URI ||
              `${
                process.env.BACKEND_HOST === 'localhost' ? 'http' : 'https'
              }://${process.env.BACKEND_HOST}:${
                process.env.BACKEND_PORT
              }/graphql`,
          })
        ),
      ]),

      cache: new InMemoryCache(),
    },

    process.env.MODE === 'ssr' && process.env.SERVER
      ? {
          ssrMode: true,
        }
      : {},
    process.env.MODE === 'ssr' && process.env.CLIENT
      ? {
          ssrForceFetchDelay: 100,
        }
      : {}
  );
}
