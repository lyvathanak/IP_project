import { createRouter, createWebHistory } from 'vue-router';
import CartListView from '@/views/CartListView.vue';
import DetailView from '@/views/DetailView.vue';
import HomeView from '@/views/HomeView.vue';
import PaymentView from '@/views/PaymentView.vue';
import ProductView from '@/views/ProductView.vue';
import AccountView from '@/views/AccountView.vue';
import SignUp from '@/components/SignUp.vue';
import Login from '@/components/Login.vue';
import AboutUs from '@/components/Footer/AboutUs.vue';
import ContactUs from '@/components/Footer/ContactUs.vue';
import Disclaimer from '@/components/Footer/Disclaimer.vue';
import Help from '@/components/Footer/Help.vue';
import PrivacyPolicy from '@/components/Footer/PrivacyPolicy.vue';
import ProductList from '@/components/ProductList.vue';
//import ItemManager from '@/components/ItemManager.vue';

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
  {
    path: '/about-us',
    name: 'About-us',
    component: AboutUs,
  },
  {
    path: '/contact-us',
    name: 'Contact-us',
    component:ContactUs,
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/privacy-policy',
    name: 'Privacy-policy',
    component: PrivacyPolicy,
  },
  // {
  //   path: '/itemmanager',
  //   name: 'ItemManager',
  //   component: ItemManager,
  // },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList,
  }
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
