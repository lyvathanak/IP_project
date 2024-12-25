<template>
      <Profile />
      <CartTotal/>
      <RouterLink to="/lists" >cart list</RouterLink>
  </template>
  
  <script>
  import CartTotal from '@/components/CartTotal.vue';
import Profile from '@/components/Profile.vue';
  
  export default {
    components: {
      Profile,CartTotal
    },
  };
  </script>
  
  <style scoped>
  </style>
  