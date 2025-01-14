<template>
  <div class="body">
    <div class="container">
      <!-- Show loading message while fetching products -->
      <div v-if="loading" class="loading">Loading products...</div>
      
      <!-- Show error message if fetching failed -->
      <div v-if="error" class="error">{{ error }}</div>
       <!-- Show "No data" message if there are no products to display -->
       
        <div  v-else-if="!displayProducts().length" class="no-data">
        <div class="announcement-card">
          <h1 class="announcement-title">Product Unavailable</h1>
          <p class="announcement-message">We’re sorry! The product you're looking for is not available at the moment.</p>
          <p class="announcement-suggestion">Please check back later or explore our other categories for more exciting options.</p>
          <RouterLink to="/" class="back-button">Go Back to Home</RouterLink>
        </div>
         </div>
      <!-- Show products based on the current path -->
      <RouterLink
        :to="`/product-details/${product.id}`"
        class="card"
        v-for="(product, index) in displayProducts()"
        :key="index"
      >
        <img :src="getImagePath(product.image)" :alt="product.name" />
        <div class="info">
          <h1>{{ product.name }}</h1>
          <template v-if="product.model">
            <p><strong>Model:</strong> {{ product.model }}</p>
            <p><strong>Storage:</strong> {{ product.storage }} TB</p>
            <p><strong>Memory (RAM):</strong> {{ product.ram }} GB</p>
            <p><strong>Graphics:</strong> {{ product.graphics }}</p>
            <p><strong>Processor:</strong> {{ product.processor }}</p>
          </template>

           <template v-else-if="product.group==='cpu'">
            <p><strong>CPU</strong> {{ product.productCod }}</p>
            <p>{{ product.brand }}</p>
          </template>

          <template v-else>
            <p><strong>Product Code:</strong> {{ product.productCod }}</p>
          </template>

          <p class="price">${{ product.price }}</p>
        </div>
      </RouterLink>
   
    </div>  
     
  </div>
  <span style="padding-left: 130px; cursor: pointer; color: blue; font-size: large; " @click="toggleViewMore">{{ viewMoreText }}</span>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      loading: true,
      error: null,
      showAllProducts: 8,
      viewMoreClicks: 0,
    };
  },
  computed: {
    viewMoreText() {
      if (this.viewMoreClicks === 3) {
        return "View Less";
      } else {
        return "View More";
      }
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.products = response.data;
      } catch (error) {
        this.error = "Failed to fetch products";
      } finally {
        this.loading = false;
      }
    },
    getImagePath(filename) {
      return filename;
    },
    displayProducts() {
      const path = this.$route.path;
      const productsToShow = this.products.slice(0, this.showAllProducts);
      switch (path) {
        case "/products/all-laptops":
          return this.products.filter(item => item.group === "laptops").slice(0,this.showAllProducts);
            
        case "/products/mother-board":
          return this.products.filter(item => item.group === "mother-board").slice(0,this.showAllProducts);
        case "/products/cpu":
          return this.products.filter(item => item.group === "cpu").slice(0,this.showAllProducts);
        case "/products/monitor":
          return this.products.filter(item => item.group === "monitor").slice(0,this.showAllProducts);
        case "/products/speaker":
          return this.products.filter(item => item.group === "speaker").slice(0,this.showAllProducts);
        case "/products/controller":
          return this.products.filter(item => item.group === "controller").slice(0,this.showAllProducts);
        case "/products/power-supply-unit":
          return this.products.filter(item => item.group === "power-supply-unit").slice(0,this.showAllProducts);
        case "/products/mouse":
          return this.products.filter(item => item.group === "mouse").slice(0,this.showAllProducts);
        case "/products/keyboard":
          return this.products.filter(item => item.group === "keyboard").slice(0,this.showAllProducts);
        case "/products/usb":
          return this.products.filter(item => item.group === "usb").slice(0,this.showAllProducts);
        case "/products/microphone":
          return this.products.filter(item => item.group === "microphone").slice(0,this.showAllProducts);
        case "/products/cooling-fans":
          return this.products.filter(item => item.group === "cooling-fans").slice(0,this.showAllProducts);
        case "/products/bluetooth-adapter":
          return this.products.filter(item => item.group === "bluetooth-adapter").slice(0,this.showAllProducts);
        case "/products/msi":
          return this.products.filter(item => item.brand === "MSI").slice(0,this.showAllProducts);
        case "/products/dell":
        return this.products.filter(item => item.brand === "Dell").slice(0,this.showAllProducts);
        case "/products/asus":
          return this.products.filter(item => item.brand === "Asus").slice(0,this.showAllProducts);
        case "/products/apple":
          return this.products.filter(item => item.brand === "Apple").slice(0,this.showAllProducts);
        case "/products/hp":
          return this.products.filter(item => item.brand === "HP").slice(0,this.showAllProducts);
        case "/products/lenovo":
          return this.products.filter(item => item.brand === "Lenovo").slice(0,this.showAllProducts);
        case "/products/acer":
          return this.products.filter(item => item.brand === "Acer").slice(0,this.showAllProducts);
        case "/products/hdd":
          return this.products.filter(item => item.group === "hdd").slice(0,this.showAllProducts);
        case "/products/ssd":
          return this.products.filter(item => item.group === "ssd").slice(0,this.showAllProducts);
        case "/products/nvme-drives":
          return this.products.filter(item => item.group === "nvme-drives").slice(0,this.showAllProducts);
        case "/products/external-hard-drivers":
          return this.products.filter(item => item.group === "external-hard-drivers").slice(0,this.showAllProducts);
        case "/products/memory-cards":
          return this.products.filter(item => item.group === "memory-cards").slice(0,this.showAllProducts);
        case "/products/usb-flash-drivers":
          return this.products.filter(item => item.group === "usb-flash-drivers").slice(0,this.showAllProducts);
        case "/products/cloud-storage":
          return this.products.filter(item => item.group === "cloud-storage").slice(0,this.showAllProducts);
        case "/products/raid-systems":
          return this.products.filter(item => item.group === "raid-systems").slice(0,this.showAllProducts);
        case "/products/nas":
          return this.products.filter(item => item.group === "nas").slice(0,this.showAllProducts);
        case "/products/all-components":
        case "/products":
          return productsToShow;
        default:
          return [];
      }
    },
    toggleViewMore() {
      if (this.viewMoreClicks === 0) {
        this.showAllProducts = 16;
        this.viewMoreClicks++;
      } else if (this.viewMoreClicks === 1) {
        this.showAllProducts = 32;
        this.viewMoreClicks++;
      } else if (this.viewMoreClicks === 2) {
        this.showAllProducts = this.products.length;
        this.viewMoreClicks++;
      } else {
        this.showAllProducts = 8;
        this.viewMoreClicks = 0;
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
<style scoped>
.body{
  display: flex;
  justify-content: center;
}
.container{
  display:flex ;
  flex-wrap: wrap;
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
.no-data{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.announcement-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

/* Title styling */
.announcement-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

/* Message styling */
.announcement-message {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

/* Suggestion styling */
.announcement-suggestion {
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
}

/* Back button styling */
.back-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>