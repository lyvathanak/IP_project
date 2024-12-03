import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:HomeView,
    },
    // {
    //   path:"/products",
    //   name:"products",
    //   component:ProductView,
    // },
    // {
    //   path:"/product/details",
    //   name:"product Details",
    //   component:DetailView,
    // },
    // {
    //   path:"/lists",
    //   name:"cart",
    //   component:CartListView,
    // },
    // {
    //   path:"/paymentMethod",
    //   name:"paymentMethod",
    //   component:PaymentView,
    // },
    // {
    //   path:"/account",
    //   name:"account",
    //   component:AccountView,
    // },
  ],
})

export default router
