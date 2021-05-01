import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Preview from '../views/Preview.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/preview/:type',
    name: 'Preview',
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
