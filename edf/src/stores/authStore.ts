import { defineStore } from 'pinia';
import { useLoginMutation, Client } from 'src/graphql/generated/operations';
import { LocalStorage } from 'quasar';
import { ref } from 'vue';
import { router } from 'src/router';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(LocalStorage.getItem('access-token'));
  const client = ref(null as Client | null);

  const login = async (usernameOrEmail: string, password: string) => {
    const { mutate, onError, onDone } = useLoginMutation({
      variables: {
        usernameOrEmail,
        password,
      },
      fetchPolicy: 'no-cache',
    });

    onDone((result:any) => {
      LocalStorage.set('access-token', result.data?.login.token);
      token.value = result.data?.login.token ?? null;
      router.push({ name: 'Home' });
    });

    onError(() => {
      router.push({ name: 'Login' });
    });

    await mutate();
  };

  const logout = async () => {
  
      LocalStorage.remove('access-token');

    reset();
    await router.push({ path: '/login' });
  };

  const reset = () => {
    token.value = null;
    client.value = null;
  };

  return {
    token,
    client,
    login,
    logout,
    reset,
  };
});
