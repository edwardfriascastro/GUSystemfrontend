import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  Router,
} from 'vue-router';
import routes from './routes';
import { useAuthStore } from 'stores/authStore';
import { useMeQuery, Client } from 'src/graphql/generated/operations';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

let router: Router;

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  router.beforeEach(async (to) => {
    const authStore = useAuthStore();
    const { client } = storeToRefs(authStore);

    if (to.path === '/login' && !to.name) {
      return { name: 'Login' };
    }

    if (
      !authStore.token &&
      to.meta.requireAuth !== false &&
      to.name !== 'Login'
    ) {
      return { name: 'Login' };
    }

    if (to.path !== '/login') {
      const { result, onError, refetch } = useMeQuery({
        fetchPolicy: 'no-cache',
      });

      await refetch();
      watch(
        result,
        () => {
          if (!result.value) {
            return;
          }
          client.value = result.value.me.client as Client;
        },
        {
          immediate: true,
        }
      );
      onError((error:any) => {
        console.error('Error', error);
        return { name: 'Login' };
      });
    }
  });

  return router;
});

export { router };
