<template>
  <div class="body">
    <div class="container">
      <!-- Show loading message while fetching products -->
      <div v-if="loading" class="loading">Loading products...</div>
      
      <!-- Show error message if fetching failed -->
      <div v-if="error" class="error">{{ error }}</div>

      <!-- Show product cards when data is available -->
      <RouterLink :to="`/product-details/${laptop.id}`"
        class="card"
        v-for="(laptop, index) in products"
        :key="index"
       
      >
        <img :src="getImagePath(laptop.image)" :alt="laptop.name" />
        <div class="info">
          <h1>{{ laptop.name }}</h1>
          <p><strong>Model:</strong> {{ laptop.model }}</p>
          <p><strong>Storage:</strong> {{ laptop.storage }} TB</p>
          <p><strong>Memory (RAM):</strong> {{ laptop.ram }} GB</p>
          <p><strong>Graphics:</strong> {{ laptop.graphics }}</p>
          <p><strong>Processor:</strong> {{ laptop.processor }}</p>
          <p class="price">${{ laptop.price }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [], // Store laptops data here
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/laptops"); // Fetch from JSON Server
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to load products. Please try again.");
      }
    },
    getImagePath(filename) {
      return filename;
    },
  },
  mounted() {
    this.fetchProducts(); // Fetch data when the component mounts
  },
};
</script>


<style scoped>

.body {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;


  
  padding: 20px;
  width: 100%;
  max-width: 1440px;
  gap: 25px 25px;
}

.card {
  width: 298px;
  border: 1px solid black;
  height: 294px;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

img {
  width: 159px;
  height: 122.36px;
  object-fit: contain;
}

h1 {
  font-size: 16px;
  width: 260px;
  margin: 0px;
}

p {
  font-size: 12px;
  color: rgb(77, 77, 77);
  margin: 0px;
}

.info p strong {
  font-size: 12px;
  color: rgb(89, 89, 89);
  margin: 0px;
}
</style>