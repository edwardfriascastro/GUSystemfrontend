import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type AuthenticatedClient = {
  __typename?: 'AuthenticatedClient';
  client: Client;
  token: Scalars['ID'];
};

export type Client = IEntity & {
  __typename?: 'Client';
  creationDate?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  modificationDate?: Maybe<Scalars['DateTime']>;
  projects?: Maybe<Array<Project>>;
  username: Scalars['String'];
};

export type ClientInputType = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  projectIds?: InputMaybe<Array<Scalars['String']>>;
  username: Scalars['String'];
};

export type IEntity = {
  creationDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  modificationDate?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Logins an client into the system */
  login: AuthenticatedClient;
  /** Remove a project */
  removeProject: Scalars['ID'];
  /** Deletes a user */
  removeUser: Scalars['ID'];
  /** Saves a new client (password required) */
  saveClient: Client;
  /** Saves a project */
  saveProject: Project;
  /** Saves a new user */
  saveUser: User;
  /** Updates a  client */
  updateClient: Client;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRemoveProjectArgs = {
  projectId: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  userId: Scalars['String'];
};


export type MutationSaveClientArgs = {
  client: ClientInputType;
};


export type MutationSaveProjectArgs = {
  project: ProjectInputType;
};


export type MutationSaveUserArgs = {
  user: UserInputType;
};


export type MutationUpdateClientArgs = {
  client: UpdateClientInputType;
};

export type Project = IEntity & {
  __typename?: 'Project';
  clientCreator?: Maybe<Client>;
  creationDate?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  modificationDate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  users?: Maybe<Array<User>>;
};

export type ProjectInputType = {
  clientCreatorId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  usersIds?: InputMaybe<Array<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns a list of clients */
  clients: Array<Client>;
  /** Returns logged in client details */
  me: AuthenticatedClient;
  /** Returns a single project */
  project: Project;
  /** Returns a list of projects */
  projects: Array<Project>;
  /** Returns a single user */
  user: User;
  /** Returns a list of users */
  users: Array<User>;
};


export type QueryProjectArgs = {
  projectId: Scalars['String'];
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};

export type UpdateClientInputType = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  projectIds?: InputMaybe<Array<Scalars['String']>>;
  username: Scalars['String'];
};

export type User = IEntity & {
  __typename?: 'User';
  creationDate?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  modificationDate?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserInputType = {
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  username: Scalars['String'];
};

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = { __typename?: 'Query', clients: Array<{ __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string, projects?: Array<{ __typename?: 'Project', id: string, creationDate?: Date | null, modificationDate?: Date | null, description: string, name: string, users?: Array<{ __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string }> | null, clientCreator?: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } | null }> | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'AuthenticatedClient', token: string, client: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } } };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthenticatedClient', token: string, client: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } } };

export type SaveClientMutationVariables = Exact<{
  client: ClientInputType;
}>;


export type SaveClientMutation = { __typename?: 'Mutation', saveClient: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } };

export type UpdateClientMutationVariables = Exact<{
  client: UpdateClientInputType;
}>;


export type UpdateClientMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string, projects?: Array<{ __typename?: 'Project', id: string, creationDate?: Date | null, modificationDate?: Date | null, description: string, name: string, users?: Array<{ __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string }> | null }> | null } };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, creationDate?: Date | null, modificationDate?: Date | null, description: string, name: string, clientCreator?: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } | null, users?: Array<{ __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string }> | null }> };

export type ProjectQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type ProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: string, creationDate?: Date | null, modificationDate?: Date | null, description: string, name: string, users?: Array<{ __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string }> | null, clientCreator?: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } | null } };

export type RemoveProjectMutationVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type RemoveProjectMutation = { __typename?: 'Mutation', removeProject: string };

export type SaveProjectMutationVariables = Exact<{
  project: ProjectInputType;
}>;


export type SaveProjectMutation = { __typename?: 'Mutation', saveProject: { __typename?: 'Project', id: string, creationDate?: Date | null, modificationDate?: Date | null, description: string, name: string, clientCreator?: { __typename?: 'Client', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string, email: string } | null, users?: Array<{ __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string }> | null } };

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string }> };

export type RemoveUserMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: string };

export type SaveUserMutationVariables = Exact<{
  user: UserInputType;
}>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUser: { __typename?: 'User', id: string, creationDate?: Date | null, modificationDate?: Date | null, username: string, firstName: string, lastName: string } };


export const ClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientCreator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useClientsQuery__
 *
 * To run a query within a Vue component, call `useClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useClientsQuery();
 */
export function useClientsQuery(options: VueApolloComposable.UseQueryOptions<ClientsQuery, ClientsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ClientsQuery, ClientsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ClientsQuery, ClientsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, {}, options);
}
export function useClientsLazyQuery(options: VueApolloComposable.UseQueryOptions<ClientsQuery, ClientsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ClientsQuery, ClientsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ClientsQuery, ClientsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, {}, options);
}
export type ClientsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ClientsQuery, ClientsQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useMeQuery__
 *
 * To run a query within a Vue component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMeQuery();
 */
export function useMeQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export function useMeLazyQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export type MeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MeQuery, MeQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usernameOrEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"usernameOrEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usernameOrEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     usernameOrEmail: // value for 'usernameOrEmail'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginMutation, LoginMutationVariables>;
export const SaveClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClientInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"client"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useSaveClientMutation__
 *
 * To run a mutation, you first call `useSaveClientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveClientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveClientMutation({
 *   variables: {
 *     client: // value for 'client'
 *   },
 * });
 */
export function useSaveClientMutation(options: VueApolloComposable.UseMutationOptions<SaveClientMutation, SaveClientMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SaveClientMutation, SaveClientMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SaveClientMutation, SaveClientMutationVariables>(SaveClientDocument, options);
}
export type SaveClientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SaveClientMutation, SaveClientMutationVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"client"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"client"},"value":{"kind":"Variable","name":{"kind":"Name","value":"client"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateClientMutation({
 *   variables: {
 *     client: // value for 'client'
 *   },
 * });
 */
export function useUpdateClientMutation(options: VueApolloComposable.UseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, options);
}
export type UpdateClientMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateClientMutation, UpdateClientMutationVariables>;
export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"clientCreator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useProjectsQuery__
 *
 * To run a query within a Vue component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProjectsQuery();
 */
export function useProjectsQuery(options: VueApolloComposable.UseQueryOptions<ProjectsQuery, ProjectsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProjectsQuery, ProjectsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProjectsQuery, ProjectsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, {}, options);
}
export function useProjectsLazyQuery(options: VueApolloComposable.UseQueryOptions<ProjectsQuery, ProjectsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProjectsQuery, ProjectsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProjectsQuery, ProjectsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, {}, options);
}
export type ProjectsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProjectsQuery, ProjectsQueryVariables>;
export const ProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Project"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientCreator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useProjectQuery__
 *
 * To run a query within a Vue component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProjectQuery({
 *   projectId: // value for 'projectId'
 * });
 */
export function useProjectQuery(variables: ProjectQueryVariables | VueCompositionApi.Ref<ProjectQueryVariables> | ReactiveFunction<ProjectQueryVariables>, options: VueApolloComposable.UseQueryOptions<ProjectQuery, ProjectQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProjectQuery, ProjectQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProjectQuery, ProjectQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, variables, options);
}
export function useProjectLazyQuery(variables: ProjectQueryVariables | VueCompositionApi.Ref<ProjectQueryVariables> | ReactiveFunction<ProjectQueryVariables>, options: VueApolloComposable.UseQueryOptions<ProjectQuery, ProjectQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProjectQuery, ProjectQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProjectQuery, ProjectQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, variables, options);
}
export type ProjectQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProjectQuery, ProjectQueryVariables>;
export const RemoveProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}]}]}}]} as unknown as DocumentNode;

/**
 * __useRemoveProjectMutation__
 *
 * To run a mutation, you first call `useRemoveProjectMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProjectMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveProjectMutation({
 *   variables: {
 *     projectId: // value for 'projectId'
 *   },
 * });
 */
export function useRemoveProjectMutation(options: VueApolloComposable.UseMutationOptions<RemoveProjectMutation, RemoveProjectMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveProjectMutation, RemoveProjectMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveProjectMutation, RemoveProjectMutationVariables>(RemoveProjectDocument, options);
}
export type RemoveProjectMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveProjectMutation, RemoveProjectMutationVariables>;
export const SaveProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"clientCreator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useSaveProjectMutation__
 *
 * To run a mutation, you first call `useSaveProjectMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveProjectMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveProjectMutation({
 *   variables: {
 *     project: // value for 'project'
 *   },
 * });
 */
export function useSaveProjectMutation(options: VueApolloComposable.UseMutationOptions<SaveProjectMutation, SaveProjectMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SaveProjectMutation, SaveProjectMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SaveProjectMutation, SaveProjectMutationVariables>(SaveProjectDocument, options);
}
export type SaveProjectMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SaveProjectMutation, SaveProjectMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useUserQuery__
 *
 * To run a query within a Vue component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserQuery({
 *   userId: // value for 'userId'
 * });
 */
export function useUserQuery(variables: UserQueryVariables | VueCompositionApi.Ref<UserQueryVariables> | ReactiveFunction<UserQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserQuery, UserQueryVariables>(UserDocument, variables, options);
}
export function useUserLazyQuery(variables: UserQueryVariables | VueCompositionApi.Ref<UserQueryVariables> | ReactiveFunction<UserQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, variables, options);
}
export type UserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserQuery, UserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useUsersQuery__
 *
 * To run a query within a Vue component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUsersQuery();
 */
export function useUsersQuery(options: VueApolloComposable.UseQueryOptions<UsersQuery, UsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UsersQuery, UsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UsersQuery, UsersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, {}, options);
}
export function useUsersLazyQuery(options: VueApolloComposable.UseQueryOptions<UsersQuery, UsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UsersQuery, UsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UsersQuery, UsersQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, {}, options);
}
export type UsersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UsersQuery, UsersQueryVariables>;
export const RemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveUserMutation({
 *   variables: {
 *     userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserMutation(options: VueApolloComposable.UseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument, options);
}
export type RemoveUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveUserMutation, RemoveUserMutationVariables>;
export const SaveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDate"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useSaveUserMutation__
 *
 * To run a mutation, you first call `useSaveUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveUserMutation({
 *   variables: {
 *     user: // value for 'user'
 *   },
 * });
 */
export function useSaveUserMutation(options: VueApolloComposable.UseMutationOptions<SaveUserMutation, SaveUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SaveUserMutation, SaveUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SaveUserMutation, SaveUserMutationVariables>(SaveUserDocument, options);
}
export type SaveUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SaveUserMutation, SaveUserMutationVariables>;