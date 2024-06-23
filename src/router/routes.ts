import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',name: 'Index', component: () => import('pages/IndexPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      { 
        path: 'users', name:'Users', component: () => import('src/modules/admin/patients/pages/UserListPage.vue') ,
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      { 
        path: 'records', name:'Records', component: () => import('src/modules/admin/records/pages/RecordListPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: 'records/:id',
        name: 'Create-Record',
        component: () => import('../modules/admin/records/components/RecordPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: 'records/history/:id',
        name: 'History',
        component: () => import('src/modules/admin/records/components/DietHistory.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: 'signin',
        name: 'Sign-In',
        component: () => import('../modules/auth/page/LoginPage.vue')
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../modules/users/dashboard/pages/UsersPage.vue'),
        meta: { requiresAuth: true, roles: ['patient']}
      },
      {
        path:'nutritionaldiets',
        name: 'Nutritional-Diets',
        component: () => import('src/modules/users/dashboard/components/NutritionalDiets.vue')
      }
    ],
  },
  { path: '/unauthorized', name: 'Unauthorized', component: () => import('src/shared/component/UnauthorizedPage.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
