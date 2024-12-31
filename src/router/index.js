import { createRouter, createWebHistory } from 'vue-router';
import CartListView from '@/views/CartListView.vue';
import DetailView from '@/views/DetailView.vue';
import HomeView from '@/views/HomeView.vue';
import PaymentView from '@/views/PaymentView.vue';
import ProductView from '@/views/ProductView.vue';
import AccountView from '@/views/AccountView.vue';
import SignUp from '@/components/SignUp.vue';
import Login from '@/components/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'Sign-Up',
    component: SignUp,
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/products/all-components',
    name: 'Products',
    component: ProductView,
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetails',
    component: DetailView,
  },
  {
    path: '/lists',
    name: 'Cart',
    component: CartListView,
    meta: { requiresAuth: true },
  },
  {
    path: '/paymentMethod',
    name: 'PaymentMethod',
    component: PaymentView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth && !localStorage.getItem('user-info')) {
    // Redirect to login page if user is not authenticated
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
