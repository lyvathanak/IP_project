<template>
  <header class="header" >
    <RouterLink to="/" class="logo">GOODeal</RouterLink>
    <nav class="nav">
      <ul>
        <li
          @click="toggleDropdown('components')"
          :class="{ active: activeDropdown === 'components' }"
        >
          <a href="#">Components</a>
          <div v-if="activeDropdown === 'components'" class="dropdown">
            <RouterLink 
              v-for="(item, index) in components" 
              :key="index"
              :to="`/products/${item.toLowerCase().replace(/ /g, '-')}`"
              class="dropdown-item"
            >
              {{ item }}
            </RouterLink>
          </div>
        </li>
        <li
          @click="toggleDropdown('laptops')"
          :class="{ active: activeDropdown === 'laptops' }"
        >
          <a href="#">Laptops</a>
          <div v-if="activeDropdown === 'laptops'" class="dropdown">
            <RouterLink 
              v-for="(item, index) in laptops" 
              :key="index"
              :to="`/products/${item.toLowerCase().replace(/ /g, '-')}`"
              class="dropdown-item"
              @click="filterByGroup(item)"
            >
              {{ item }}
            </RouterLink>
          </div>
        </li>
        <li
          @click="toggleDropdown('storage')"
          :class="{ active: activeDropdown === 'storage' }"
        >
          <a href="#">Storage</a>
          <div v-if="activeDropdown === 'storage'" class="dropdown">
            <RouterLink 
              v-for="(item, index) in storage" 
              :key="index"
              :to="`/products/${item.toLowerCase().replace(/ /g, '-')}`"
              class="dropdown-item"
            >
              {{ item }}
            </RouterLink>
          </div>
        </li>
        <li
          @click="toggleDropdown('accessory')"
          :class="{ active: activeDropdown === 'accessory' }"
        >
          <a href="#">Accessories</a>
          <div v-if="activeDropdown === 'accessory'" class="dropdown">
            <RouterLink 
              v-for="(item, index) in accessories" 
              :key="index"
              :to="`/products/${item.toLowerCase().replace(/ /g, '-')}`"
              class="dropdown-item"
            >
              {{ item }}
            </RouterLink>
          </div>
        </li>
      </ul>
    </nav>
    <div class="actions">
      <Icon @click="toggleSearch" icon="material-symbols:search" class="icon" />
      <RouterLink to="/cart" class="icon">
        <Icon icon="material-symbols:shopping-cart" />
      </RouterLink>
      <RouterLink v-if="userInfo" to="/account" class="icon">
        <Icon icon="material-symbols:person" />
      </RouterLink>
      <RouterLink v-else to="/login" class="icon">
        <Icon icon="material-symbols:person-outline" />
      </RouterLink>
    </div>
    
    <!-- Search bar that appears below header -->
    <div v-if="isSearchVisible" class="search-container">
      <div class="search-wrapper">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="Search products..."
          @input="handleSearch"
        />
        <div v-if="searchResults.length > 0" class="search-results">
          <RouterLink
            v-for="result in searchResults"
            :key="result.id"
            :to="`/product-details/${result.id}`"
            class="search-result-item"
            @click="handleProductClick(result.id)"
          >
            <img :src="result.image" :alt="result.name" class="result-image">
            <div class="result-info">
              <span class="result-name">{{ result.name }}</span>
              <span class="result-price">${{ result.price }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";

export default {
  components: { Icon },
  data() {
    return {
      activeDropdown: null,
      isSearchVisible: false,
      searchQuery: "",
      searchResults: [],
      userInfo: JSON.parse(localStorage.getItem("user-info")) || null,
      components: [
        "All Components",
        "CPU",
        "GPU",
        "RAM",
        "Mother board",
        "Power Supply",
        "Case",
      ],
      laptops: [
        "All Laptops",
        "Apple",
        "Dell",
        "HP",
        "Lenovo",
        "ASUS",
        "MSI",
        "Acer",
      ],
      storage: [
        "All Storage",
        "SSD",
        "HDD",
        "External Drive",
        "USB Drive",
      ],
      accessories: [
        "All Accessories",
        "Mouse",
        "Keyboard",
        "Headset",
        "Webcam",
      ],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.fetchProducts = response.data;
      } catch (error) {
        console.error("Error fetching laptops:", error);
      }
    },
    async handleSearch() {
      if (this.searchQuery.length < 2) {
        this.searchResults = [];
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/products");
        this.searchResults = response.data
          .filter(
            (products) =>
              products.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              products.group.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              products.brand.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .slice(0, 5); 
      } catch (error) {
        console.error("Error fetching search results:", error);
        this.searchResults = [];
      }
    },
    toggleDropdown(menu) {
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    },
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
      if (!this.isSearchVisible) {
        this.searchQuery = "";
        this.searchResults = [];
      }
    },
   async handleProductClick(id) {
      this.hideSearch()
      await this.$router.push(`/product-details/${id}`);
      window.location.reload();
  },
    hideSearch() {
      this.isSearchVisible = false;
      this.searchQuery = "";
      this.searchResults = [];
    },
  },
  watch: {

  },
};
</script>

<style scoped>
.header {
  background-color: black;
  padding: 0 30px;
  height: 80px; /* Adjusted height for a larger logo */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-family: "Abhaya Libre", serif; /* Default font for navigation and actions */
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 64px; /* Bigger logo size */
  font-family: "ADLaM Display", sans-serif; /* Font for the logo */
  font-weight: 700; /* Bold for better visibility */
  letter-spacing: 1.5px; /* Spacing for clarity */
  text-transform: uppercase; /* Capitalized text for the logo */
}

.nav ul {
  display: flex;
  gap: 40px; /* More spacing between menu items */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 16px; /* Slightly larger text for readability */
  font-family: "Abhaya Libre", serif; /* Font for navigation items */
  font-weight: 500;
  text-transform: uppercase; /* Capitalized for uniformity */
}

.nav li {
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.nav li.active {
  background-color: white;
  color: black;
}

.nav li.active > a {
  color: black;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 24px; /* Spacing between action icons */
  align-items: center;
}

.icon {
  color: white;
  font-size: 24px; /* Adjusted size for icons */
  cursor: pointer;
  transition: color 0.3s;
}

/* Dropdown styles */
.dropdown {
  position: absolute;
  top: 80px; /* Adjusted for the new header height */
  left: 0;
  width: 100%;
  background-color: black;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  z-index: 100;
}

.dropdown-item {
  color: white;
  text-decoration: none;
  font-size: 14px;
  padding: 8px 16px;
  font-family: "Abhaya Libre", serif; /* Font for dropdown items */
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Search bar styles */
.search-container {
  position: absolute;
  top: 80px; /* Adjusted for the new header height */
  left: 0;
  width: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 200;
}

.search-wrapper {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Abhaya Libre", serif; /* Font for search input */
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 400px;
  overflow-y: auto;
}

.search-result-item {
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
}

.search-result-item:hover {
  background-color: #f5f5f5;
}

.result-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.result-info .result-name {
  font-weight: bold;
}

.result-info .result-price {
  color: #888;
}
</style>


