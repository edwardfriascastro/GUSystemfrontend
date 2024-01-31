import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    strict: true,
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/LoginPage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requireAuth: true,
      sectionName: 'Casos',
    },
    children: [
      {
        path: '',
        name: 'Home',
        redirect: '/users',
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('pages/UsersPage.vue'),
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('pages/ProjectsPage.vue'),
      },
      {
        path: 'clients',
        name: 'Clients',
        component: () => import('pages/ClientsPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];
export default routes;
