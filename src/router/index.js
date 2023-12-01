import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Checkout from '../views/Checkout.vue';
import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

export default router;
