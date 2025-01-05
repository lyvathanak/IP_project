<template>
  <header class="header">
    <RouterLink to="/" class="logo">GOODDeal</RouterLink>
    <ul class="nav">
      <li @mouseover="hovered = 'components'" @mouseleave="hovered = ''">
        <a href="#">Components</a>
        <div class="con" v-if="hovered === 'components'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" v-for="(item, index) in components"
              :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
      <li @mouseover="hovered = 'laptops'" @mouseleave="hovered = ''">
        <a href="#">Laptops</a>
        <div class="con" v-if="hovered === 'laptops'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" v-for="(item, index) in laptops"
              :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
      <li @mouseover="hovered = 'storage'" @mouseleave="hovered = ''">
        <a href="#">Storage</a>
        <div class="con" v-if="hovered === 'storage'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" v-for="(item, index) in storage"
              :key="index">
              {{ item }}
            </a>
          </div>
        </div>
      </li>
      <li @mouseover="hovered = 'accessory'" @mouseleave="hovered = ''">
        <a href="#">Accessory</a>
        <div class="con" v-if="hovered === 'accessory'">
          <div class="sub-container">
            <a :href="`/products/${item.toLowerCase().replace(/ /g, '-')}`" v-for="(item, index) in accessory"
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
          <Icon @click="toggleSearch" icon="material-symbols:search" class="search-icon" />
          <input v-if="isSearchVisible" type="text" class="search" placeholder="Search here..." v-model="searchQuery"
            @input="searchProducts" />
          <ul v-if="isSearchVisible && searchResults.length" class="search-results">
            <li v-for="(product, index) in searchResults" :key="index" class="search-result-item">
              <img :src="product.image" :alt="product.name" class="search-result-image" />
              <div class="search-result-details">
                <p>{{ product.name }}</p>
                <p>${{ product.price }}</p>
              </div>
            </li>
          </ul>
        </li>
      </div>

      <div class="cart-section">
        <a @click="toggleCart" href="#" class="cart">Cart</a>
        <div v-if="isCartVisible" class="card-dropdown">
          <p v-if="cartItems.length === 0">Empty</p>
          <ul v-else>
            <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
              <img :src="item.image" :alt="item.name" class="cart-item-image" />
              <p>{{ item.name }}</p>
              <div class="cart-item-details">
                <p>{{ item.quantity }}</p>
                <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </li>
          </ul>
          <button class="add-to-cart">
            <RouterLink to="/lists">Add to cart</RouterLink>
          </button>
        </div>
      </div>
      <RouterLink v-if="userInfo" to="/account" class="account">Account</RouterLink>
      <RouterLink v-else to="/login" class="login">Login</RouterLink>
    </div>
  </header>
</template>
<script>
import { useCartStore } from '@/stores/cart';
import { Icon } from "@iconify/vue";
import axios from 'axios';
import { computed, ref } from 'vue';

export default {
  components: {
    Icon,
  },

  setup() {
    const isSearchVisible = ref(false);
    const searchQuery = ref('');
    const searchResults = ref([]);
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.items);
    const isCartVisible = ref(false);

    const toggleSearch = () => {
      isSearchVisible.value = !isSearchVisible.value;
    };

    const toggleCart = () => {
      isCartVisible.value = !isCartVisible.value;
    };

    const searchProducts = async () => {
      if (searchQuery.value.trim() === '') {
        searchResults.value = [];
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/laptops', {
          params: { q: searchQuery.value },
        });
        searchResults.value = response.data;
      } catch (error) {
        console.error('Error searching products:', error);
      }
    };

    return {
      isSearchVisible,
      searchQuery,
      searchResults,
      toggleSearch,
      toggleCart,
      cartItems,
      isCartVisible,
    };
  },

  data() {
    return {
      hovered: "",
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
      search: "",
      userInfo: JSON.parse(localStorage.getItem('user-info')) || null,
    };
  },
};
</script>


<style scoped>
.cart-section {
  position: relative;
}

.cart-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: auto;
  margin-bottom: 10px;
}

.cart-item p {
  margin: 0;
  padding: 0;
  width: 100px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
}

.cart-item-details p {
  margin: 0;
  padding: 0;
  margin-right: 10px;
}

.cart {
  color: white;
  font-size: 24px;
  cursor: pointer;
  height: 100%;
  position: relative;
}

.card-dropdown {
  border-top: 1px solid rgb(244, 244, 244);
  top: 55px;
  right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(23, 23, 23);
  position: fixed;
  flex-direction: column;
  color: rgb(0, 0, 0);
  width: 300px;
}

.card-dropdown p {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 65px;
}

.card-dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.card-dropdown button {
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

.search-cart li {
  display: flex;
  align-items: center;
}

.search {
  border-top: 1px solid rgb(244, 244, 244);
  transform: translate(-50%, 0%);
  top: 55px;
  left: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: black;
  width: 100%;
  color: white;
  position: fixed;
}

.search-cart {
  position: relative;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  z-index: 1000;
}

.search-result-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.search-result-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.search-result-details {
  display: flex;
  flex-direction: column;
}

ul {
  position: relative;
  display: flex;
  gap: 37px;
  align-items: center;
  margin: 0;
  justify-content: center;
}

.add-to-cart {
  padding: 14px 24px;
  border-radius: 1px;
  font-size: 16px;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 100%;
}

li {
  list-style: none;
  height: 55px;
  position: relative;
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

p {
  width: fit-content;
  padding: 0px;
  margin: 0px;
}

li:hover>a {
  text-decoration: none;
}

.con {
  border-top: 1px solid rgb(244, 244, 244);
  transform: translate(-50%, 0%);
  top: 55px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 10px;
  column-gap: 75px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: fit-content;
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
  height: 55px;
}

.cart,
.account {
  color: white;
  text-decoration: none;
  font-size: 24px;
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>
