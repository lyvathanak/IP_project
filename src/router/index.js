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
    path: '/products/:group',
    name: 'ProductsGroup',
    component: ProductView,
    props: true, 
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
    name: 'AllComponents',
    component: ProductView,
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetails',
    component: DetailView,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartListView,
    meta: { requiresAuth: true },
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentView,
    meta: { requiresAuth: true },
  },
  // Catch-all route - redirects to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guards
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user-info');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ 
      name: 'Login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

// Error handling
router.onError((error) => {
  console.error('Navigation error:', error);
  router.push('/');
});

export default router;