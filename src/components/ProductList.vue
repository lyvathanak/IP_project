<!-- filepath: /d:/Learning/I4_GIC/S1/InternetProgramming_I/Group_IP_Project/IP_project/src/components/ProductList.vue -->
<template>
    <div class="product-list">
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-details">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
            <p>Group: {{ product.group }}</p>
            <p>Rating: {{ product.rating }}</p>
            <p>Reviews: {{ product.reviews }}</p>
            <p>Stock: {{ product.stock }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'ProductList',
    setup() {
      const products = ref([]);
  
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/laptops');
          products.value = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      onMounted(fetchProducts);
  
      return {
        products,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .product-image {
    width: 100px;
    height: auto;
  }
  
  .product-details {
    flex-grow: 1;
    padding: 0 10px;
  }
  </style>