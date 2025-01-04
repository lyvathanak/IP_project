<template>
  <header class="header">
    <RouterLink to="/" class="logo">GOODDeal</RouterLink>
    <ul class="nav">
      <li
        @mouseover="hovered = 'components'" 
        @mouseleave="hovered = ''"
      >
        <a href="#">Components</a>
        <div class="con" v-if="hovered === 'components'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" 
               v-for="(item, index) in components" 
               :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
      <li
        @mouseover="hovered = 'laptops'" 
        @mouseleave="hovered = ''"
      >
        <a href="#">Laptops</a>
        <div class="con" v-if="hovered === 'laptops'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" 
               v-for="(item, index) in laptops" 
               :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
      <li 
        @mouseover="hovered = 'storage'" 
        @mouseleave="hovered = ''"
      >
        <a href="#">Storage</a>
        <div class="con" v-if="hovered === 'storage'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" 
               v-for="(item, index) in storage" 
               :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
      <li 
        @mouseover="hovered = 'accessory'" 
        @mouseleave="hovered = ''"
      >
        <a href="#">Accessory</a>
        <div class="con" v-if="hovered === 'accessory'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" 
               v-for="(item, index) in accessory" 
               :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
    </ul>
    <div class="actions">
      <div class="search-cart">
        <li>
          <Icon
            @click="toggleSearch" 
            icon="material-symbols:search" 
            class="search-icon" 
          />
          <input
            v-if="isSearchVisible" 
            type="text"
            class="search"
            placeholder="Search here..."
            v-model="search"
            @keyup.enter="onPressEnter"
          />
        </li>
      </div>
      <div class="cart-section">
        <a @click="toggleCart" href="#" class="cart">Cart</a>
        <div v-if="isCartVisible" class="card-dropdown">
          <p>Empty</p>
          <button @click="addToCart">Add to cart</button>
        </div>
      </div>
      <RouterLink  v-if="userInfo" to="/account" class="account">Account</RouterLink>
      <RouterLink v-else to="/login" class="login">Login</RouterLink>
    </div>
  </header>
</template>
<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      hovered: "",
      isSearchVisible: false,
      isCartVisible: false,
      cartItems: [],
      components: [
        "All Components",
        "CPU",
        "Monitor",
        "Mother Board",
        "Speaker",
        "Controller",
        "Power Supply Unit",
        "Mouse",
        "Keyboard",
        "USB",
        "Microphone",
        "Cooling Fans",
        "Bluetooth Adapter",
      ],
      laptops: [
        "All Laptops",
        "MSI",
        "Asus",
        "Apple",
        "HP",
        "Lenovo",
        "Acer",
        "MacBook",
      ],
      storage: [
        "All Storage",
        "HDD",
        "SSD",
        "NVMe Drives",
        "External Hard Drives",
        "USB Flash Drives",
        "Memory Cards",
        "Cloud Storage",
        "RAID Systems",
        "NAS",
      ],
      accessory: [
        "All Accessories",
        "Laptop Bags",
        "Gaming Headsets",
        "External DVD Drives",
        "Docking Stations",
        "External Keyboards",
        "Mouse Pads",
        "Cable Organizers",
        "Power Banks",
        "Screen Protectors",
        "Webcams",
        "USB Hubs",
        "Adapters and Converters",
      ],
      userInfo: JSON.parse(localStorage.getItem('user-info')) || null,
    };
  },
  methods: {
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    },
    onPressEnter() {
      alert(`Searching for ${this.search}`);
      
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
    addToCart() {
      this.cartItems.push("Sample Item");
      alert("Item added to cart!");
    },
    account(){
      const user =JSON.parse(localStorage.getItem('user-info'));
      if(user){
         this.$route.push('/account');
      }else{
        this.$route.push('/login');
      }
    }
  },
};
</script>


<style scoped>
.cart-section
 .cart{
height: 100%;
}
.cart{
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: relative;
}
.card-dropdown{
  border-top: 1px solid rgb(244, 244, 244);
  top:55px;
  right: 47px;
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(23, 23, 23);
  position: fixed;
  flex-direction: column;
  color: rgb(0, 0, 0);
}
.card-dropdown p{
  width: 220px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-dropdown button{
  height: 55px;
  background-color: black;
  font-size: 16px;
  color: white;
  cursor: pointer;
}
.search-icon {
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: relative;
}
/* Dropdown Styling */
.search-cart li{
  display: flex;
  align-items: center;
}
.search{
  border-top: 1px solid rgb(244, 244, 244);
  transform: translate(-50%, 0%);
  top:55px;
  left: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: black;
  width: 100%;
  color: white;
  position: fixed;
}
ul {
  position: relative;
  display: flex;
  gap: 37px;
  align-items: center;
  margin: 0;
  justify-content: center;
}

li {
  list-style: none;
  height: 55px;
  position: relative; /* Ensure sub-container is positioned relative to the li */
}

a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

p{
  width: fit-content;
}
li:hover > a {
  text-decoration: none;
}
.con{
  border-top: 1px solid rgb(244, 244, 244);
  transform: translate(-50%, 0%);
  top:55px;
  left: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: black;
  width: 100%;
  position: fixed;
}
.sub-container {
  color: white;
  padding: 15px;
  /* border: 1px solid rgb(255, 255, 255); */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 10px;
  column-gap: 75px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width:fit-content;
}

.sub-container a {
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  color: white;
  width: 220px;
  padding: 8px 12px;
  text-align: center;
  border-left: none;
  border-right: none;
  border-top: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.sub-container a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}





/* General Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;
  background-color: black;
  color: white;
}

.logo {
  font-size: 48px;
  font-weight: bold;
}

.actions {
  display: flex;
  align-items: center;
  gap: 37px;
}

.search-cart {
  display: flex;
  align-items: center;
  gap: 23px;
}

.cart,
.account {
  color: white;
  text-decoration: none;
  font-size: 24px;
}

.cart:hover,
.account:hover {
  text-decoration: underline;
}
.actions {
  display: flex;
  align-items: center;
  gap: 37px;
  height: 55px; /* Set a fixed height for the actions container */
}

.cart,
.account {
  color: white;
  text-decoration: none;
  font-size: 24px;
  display: flex;
  justify-content: center;
  height: 100%; /* Match the height of the parent container (actions) */
}

</style>
