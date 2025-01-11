<template>
  <header class="header">
    <RouterLink to="/" class="logo">GOODDeal</RouterLink>
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
              @click="filterByCategory('components', item)"
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
            :to="`/product/${result.id}`"
            class="search-result-item"
            @click="hideSearch"
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
      filteredLaptops: [], // Holds the filtered laptops based on category
    };
  },
  created() {
    // Fetch all laptops when the component is created to populate the list
    this.fetchLaptops();
  },
  methods: {
    async fetchLaptops() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.filteredLaptops = response.data;
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
            (laptop) =>
              laptop.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              laptop.group.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              laptop.model.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              laptop.processor.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .slice(0, 5); // Limits the results to top 5 matches
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
    hideSearch() {
      this.isSearchVisible = false;
      this.searchQuery = "";
      this.searchResults = [];
    },
    filterByCategory(category, item) {
      // Filters based on category and group
      if (category === 'laptops') {
        this.filteredLaptops = this.filteredLaptops.filter(
          (laptop) => laptop.group.toLowerCase() === item.toLowerCase() || item === 'All Laptops'
        );
      }
      // You can add more filter logic for other categories here (components, storage, accessories)
    },
  },
  watch: {
    // Watch for changes in the route and filter laptops accordingly
    "$route.params.group": function(newGroup) {
      if (newGroup) {
        this.filterByGroup(newGroup);
      }
    },
  },
};
</script>

<style scoped>
.header {
  background-color: black;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

.nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav li {
  cursor: pointer;
  padding: 10px 20px;
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
  gap: 20px;
  align-items: center;
}

.icon {
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Dropdown styles */
.dropdown {
  position: absolute;
  top: 60px;
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
  padding: 8px 16px;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Search bar styles */
.search-container {
  position: absolute;
  top: 60px;
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
