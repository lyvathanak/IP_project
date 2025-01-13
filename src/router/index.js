import AboutUs from '@/components/Footer/AboutUs.vue';
import ContactUs from '@/components/Footer/ContactUs.vue';
import Disclaimer from '@/components/Footer/Disclaimer.vue';
import Help from '@/components/Footer/Help.vue';
import PrivacyPolicy from '@/components/Footer/PrivacyPolicy.vue';
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
    path: '/:group',
    name: 'ProductsGroup',
    component: ProductView,
    props: true, 
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
    children: [ 
      {
        path: 'mother-board',
        name: 'motherboards',
        component: ProductView,
      },
      {
        path: 'all-laptops',
        name: 'all-laptops',
        component: ProductView,
      },
      {
        path: '/cpu',
        name: 'cpu',
        component: ProductView,
      },

      {
        path: '/monitor',
        name: 'monitor',
        component: ProductView,
      },
      {
        path: '/speaker',
        name: 'speaker',
        component: ProductView,
      },
      {
        path: '/controller',
        name: 'controller',
        component: ProductView,
      },
      {
        path: '/power-supply-unit',
        name: 'power-supply-unit',
        component: ProductView,
      },
      {
        path: '/mouse',
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
        path: '/adapters-and-converters',
        name: 'adapters-and-converters',
        component: ProductView,
      },
      {
        path: '/:id',
        name: 'ProductDetails',
        component: DetailView,
      },
],
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
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },  
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },  
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },  
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },  
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer,
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