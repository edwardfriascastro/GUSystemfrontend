import { defineStore } from 'pinia';
import {
  Client,
  useUpdateClientMutation,
  useSaveClientMutation,
  useClientsQuery,
  Project,
} from 'src/graphql/generated/operations';
import { ref, watch } from 'vue';
import { ApolloError } from '@apollo/client';

export const useClientStore = defineStore('client', () => {
  const tempPassword = ref('');
  const client = ref({} as Client);
  const clients = ref([] as Client[]);
  const loading = ref(false);
  const error = ref(null as string | null);
  const edit = ref(false);

  const openDialog = ref(false);
  const viewOnly = ref(false);

  const loadClients = async () => {
    const {
      result,
      loading: localLoading,
      onError,
    } = useClientsQuery(
      {
        fetchPolicy: 'no-cache',
      }
    );

    loading.value = localLoading.value;

    watch(result, () => {
      console.log('result', result);
      // clients.value = cloneDeep(result?.clients as Client[]);
      loading.value = false;
    });

    onError((graphQLError:ApolloError) => {
      error.value = graphQLError.message;
    });
  };

  const updateClient = async () => {
    const clientToSave = client.value;
    if (edit.value) {
      const { mutate, onError } = useUpdateClientMutation({
        variables: {
          client: {
            id: clientToSave.id,
            firstName: clientToSave.firstName,
            lastName: clientToSave.lastName,
            email: clientToSave.email,
            username: clientToSave.username,
            projectIds: clientToSave.projects?.map((project:Project) => project.id),
          },
        },
      });

      onError((error: ApolloError) => {
        throw error;
      });

      await mutate();
    } else {
      const { mutate, onError } = useSaveClientMutation({
        variables: {
          client: {
            password: tempPassword.value,
            id: clientToSave.id,
            firstName: clientToSave.firstName,
            lastName: clientToSave.lastName,
            email: clientToSave.email,
            username: clientToSave.username,
            projectIds: clientToSave.projects?.map((project:Project) => project.id),
          },
        },
      });

      onError((error: ApolloError) => {
        throw error;
      });

      await mutate();
      tempPassword.value = '';
    }
  };


  return {
    clients,
    client,
    tempPassword,
    edit,
    loading,
    error,
    openDialog,
    viewOnly,
    loadClients,
    updateClient,
  };
});
