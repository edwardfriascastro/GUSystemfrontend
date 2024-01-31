import { ApolloClient } from '@apollo/client/core';
import { ApolloClients, provideApolloClient } from '@vue/apollo-composable';
import { boot } from 'quasar/wrappers';
import { getClientOptions } from 'src/apollo';

export default boot(
  /* async */ ({ app, router }) => {
    const options = /* await */ getClientOptions(router);
    const apolloClient = new ApolloClient(options);

    const apolloClients: Record<string, ApolloClient<unknown>> = {
      default: apolloClient,
    };

    app.provide(ApolloClients, apolloClients);
    provideApolloClient(apolloClient);
  }
);
