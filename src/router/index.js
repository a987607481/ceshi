import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/index.vue';


const router = createRouter({
  history:createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      meta:{title:'主页'}
    },
    {
      path: '/home',
      component:()=>import('../pages/home.vue'),
      meta:{title:'跳转'}
    },
  ],
});

export default router;