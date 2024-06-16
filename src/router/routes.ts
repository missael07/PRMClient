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
        path: 'users', name:'Users', component: () => import('../modules/admin/pages/UserListPage.vue') ,
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      { 
        path: 'records', name:'Records', component: () => import('../modules/patients/pages/RecordListPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: 'records/:id',
        name: 'Create-Record',
        component: () => import('../modules/patients/components/RecordPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: 'records/history/:id',
        name: 'History',
        component: () => import('../modules/patients/components/DietHistory.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: 'signin',
        name: 'Sign-In',
        component: () => import('../modules/auth/page/LoginPage.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
