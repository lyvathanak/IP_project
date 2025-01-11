<template>
  <Profile/>
  <Account/>
  <RouterLink to="/lists">cart list</RouterLink>
</template>

<script>
import Account from '@/components/Acount/Account.vue';

import CartTotal from '@/components/CartTotal.vue';
import Profile from '@/components/Login_Sign_Up/Profile.vue';
export default {
  components: {
   
     CartTotal,Account,Profile
  },
};
</script>

<style scoped></style>