import { defineStore } from 'pinia';
import {
  User,
  useUserQuery,
  useUsersQuery,
  useSaveUserMutation,
  useRemoveUserMutation,
} from 'src/graphql/generated/operations';
import { ref, watch } from 'vue';
import { ApolloError } from '@apollo/client';
import {cloneDeep} from 'lodash';

export const useUserStore = defineStore('user', () => {
  const users = ref([] as User[]);
  const user = ref({} as User);
  const error = ref(null as string | null);
  const loading = ref(false);
  const openDialog = ref(false);
  const viewOnly = ref(false);
  const edit = ref(false);


  const loadUsers = async () => {
    const {
      result,
      loading: usersLoading,
      onError,
    } = useUsersQuery(
      {
        fetchPolicy: 'no-cache',
      }
    );

    loading.value = usersLoading.value;

    watch(result, (newValue:any) => {
      users.value = cloneDeep(newValue?.users as User[]);
      loading.value = true;
    });
    onError((graphQLError: ApolloError) => {
      error.value = graphQLError.message;
    });
  };

  const loadUser = async (userId: string) => {
    const { result, loading: userLoading } = useUserQuery({ userId });

    user.value = result.value?.user as User;
    loading.value = userLoading.value;
  };

  const saveUser = async () => {
    const userToSave = user.value;

    const { mutate, onError } = useSaveUserMutation({
      variables: {
        user: {
          id: userToSave.id,
          firstName: userToSave.firstName,
          lastName: userToSave.lastName,
          username: userToSave.username,
        },
      },
    });

    onError((error: ApolloError) => {
      throw error;
    });

    await mutate();
  };

  const removeUser = async (userId: string) => {
    const { mutate, onError } = useRemoveUserMutation({
      variables: {
        userId: userId,
      },
    });

    onError((error: ApolloError) => {
      throw error;
    });

    await mutate();
  };

  return {
    loadUsers,
    loadUser,
    users,
    user,
    loading,
    edit,
    openDialog,
    saveUser,
    viewOnly,
    removeUser,
  };
});
