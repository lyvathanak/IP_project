import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import AccountView from '@/views/AccountView.vue';
import CartListView from '@/views/CartListView.vue';
import DetailView from '@/views/DetailView.vue';
import HomeView from '@/views/HomeView.vue';
import PaymentView from '@/views/PaymentView.vue';
import ProductView from '@/views/ProductView.vue';
import { createRouter, createWebHistory } from 'vue-router';

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
    path: '/products',
    name: 'all-products',
    component: ProductView,
  },
  {
    path: '/products/all-components',
    name: 'all-components',
    component: ProductView,
  },
  {
    path: '/products/mother-board',
    name: 'motherboards',
    component: ProductView,
  },
  {
    path: '/products/all-laptops',
    name: 'all-laptops',
    component: ProductView,
  },
  {
    path: '/products/cpu',
    name: 'cpu',
    component: ProductView,
  },
  {
    path: '/products/monitor',
    name: 'monitor',
    component: ProductView,
  },
  {
    path: '/products/speaker',
    name: 'speaker',
    component: ProductView,
  },
  {
    path: '/products/controller',
    name: 'controller',
    component: ProductView,
  },
  {
    path: '/products/power-supply-unit',
    name: 'power-supply-unit',
    component: ProductView,
  },
  {
    path: '/products/mouse',
    name: 'mouse',
    component: ProductView,
  },
  {
    path: '/products/keyboard',
    name: 'keyboard',
    component: ProductView,
  },
  {
    path: '/products/usb',
    name: 'usb',
    component: ProductView,
  },
  {
    path: '/products/microphone',
    name: 'microphone',
    component: ProductView,
  },
  {
    path: '/products/cooling-fans',
    name: 'cooling-fans',
    component: ProductView,
  },
  {
    path: '/products/bluetooth-adapter',
    name: 'bluetooth-adapter',
    component: ProductView,
  },
  {
    path: '/products/msi',
    name: 'msi',
    component: ProductView,
  },
  {
    path: '/products/asus',
    name: 'asus',
    component: ProductView,
  },
  {
    path: '/products/apple',
    name: 'apple',
    component: ProductView,
  },
  {
    path: '/products/hp',
    name: 'hp',
    component: ProductView,
  },
  {
    path: '/products/lenovo',
    name: 'lenovo',
    component: ProductView,
  },
  {
    path: '/products/acer',
    name: 'acer',
    component: ProductView,
  },
  {
    path: '/products/hdd',
    name: 'hdd',
    component: ProductView,
  },
  {
    path: '/products/ssd',
    name: 'ssd',
    component: ProductView,
  },
  {
    path: '/products/nvme-drives',
    name: 'nvme-drives',
    component: ProductView,
  },
  {
    path: '/products/external-hard-drives',
    name: 'external-hard-drivers',
    component: ProductView,
  },
  {
    path: '/products/memory-cards',
    name: 'memory-cards',
    component: ProductView,
  },
  {
    path: '/products/usb-flash-drives',
    name: 'usb-flash-drivers',
    component: ProductView,
  },
  {
    path: '/products/cloud-storage',
    name: 'cloud-storage',
    component: ProductView,
  },
  {
    path: '/products/raid-systems',
    name: 'raid-systems',
    component: ProductView,
  },
  {
    path: '/products/nas',
    name: 'nas',
    component: ProductView,
  },
  {
    path: '/products/accessories',
    name: 'accessories',
    component: ProductView,
  },
  {
    path: '/products/laptops-bags',
    name: 'laptops-bags',
    component: ProductView,
  },
  {
    path: '/products/gaming-headsets',
    name: 'gaming-headsets',
    component: ProductView,
  },
  {
    path: '/products/external-dvd-drivers',
    name: 'external-dvd-drivers',
    component: ProductView,
  },
  {
    path: '/products/docking-stations',
    name: 'docking-stations',
    component: ProductView,
  },
  {
    path: '/products/external-keyboards',
    name: 'external-keyboard',
    component: ProductView,
  },
  {
    path: '/products/mouse-pads',
    name: 'mouse-pads',
    component: ProductView,
  },
  {
    path: '/products/cable-organizers',
    name: 'cable-organizer',
    component: ProductView,
  },
  {
    path: '/products/power-bank',
    name: 'power-bank',
    component: ProductView,
  },
  {
    path: '/products/screen-protector',
    name: 'screen-protector',
    component: ProductView,
  },
  {
    path: '/products/webcams',
    name: 'webcams',
    component: ProductView,
  },
  {
    path: '/products/usb-hubs',
    name: 'usb-hubs',
    component: ProductView,
  },
  {
    path: '/products/adapters-and-converters',
    name: 'adapters-and-converters',
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
