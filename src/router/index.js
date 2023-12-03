import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Checkout from '../views/Checkout.vue';
import Login from '../views/Login.vue';
import Results from '../views/Results.vue';
import ProductsDetails from '../views/ProductDetails.vue';

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
    {
      path: '/results',
      name: 'Results',
      component: Results,
    },
    {
      path: '/productDetails',
      name: 'ProductDetails',
      component: ProductsDetails,
    },
  ],
});

export default router;
