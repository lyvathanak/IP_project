<template>
  <header class="header">
    <div class="logo">GOODDeal</div>
    <nav class="nav">
      <a href="#">Component</a>
      <a href="#">Laptop</a>
      <a href="#">Storage</a>
      <a href="#">Accessory</a>
    </nav>
    <div class="actions">
      <div class="search-cart">
        <Icon icon="material-symbols:search" class="search-icon" />
        <a href="#" class="cart">cart</a>
      </div>
      <a href="#" class="account">Account</a>

    </div>
  </header>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
  components:{
    Icon
  }
}
</script>
<style scoped>
/* Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 23px;
  padding-right: 23px;
  background-color: black;
  color: white;
}
.search-cart{
  display: flex;
  align-items: center;
  gap:23px;
}
.logo {
  font-size: 48px;
  font-weight: bold;
}
.nav{
  display: flex;
  gap: 37px;
}
.nav a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  height: 55.2px; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  text-align: center;
  /* background-color: rgb(255, 255, 255); */
}

a:hover{
  text-decoration: none;
}

.actions {
  display: flex;
  align-items: center;
  gap:37px;
}

.search-icon {
  color: white;
  font-size: 24px; /* Adjust size if needed */
  cursor: pointer;
}

.cart,
.account {
  color: white;
  text-decoration: none;
  width:87px;
}
.actions a{
  width: auto;
  display: flex;
  justify-content: center;
  gap: 37px;
  font-size: 24px;
}
.cart:hover,
.account:hover {
  text-decoration: underline;
}
</style>
