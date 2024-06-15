import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',name: 'Index', component: () => import('pages/IndexPage.vue') 
      },
      { 
        path: 'users', name:'Users', component: () => import('../modules/admin/pages/UserListPage.vue') 
      },
      { 
        path: 'records', name:'Records', component: () => import('../modules/patients/pages/RecordListPage.vue'),
        children: [
          
        ]
      },
      {
        path: 'records/:id',
        name: 'Create-Record',
        component: () => import('../modules/patients/components/RecordPage.vue')
      },
      {
        path: 'records/history/:id',
        name: 'History',
        component: () => import('../modules/patients/components/DietHistory.vue')
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
