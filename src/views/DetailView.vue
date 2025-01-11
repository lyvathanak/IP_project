<template>
  <Header/>
  <div class="details-view-page">
    <!-- Breadcrumb Navigation -->
    <!-- <nav class="breadcrumb">
    <router-link to="/">Home</router-link> > 
    <router-link to="/products/all-laptops">Laptop</router-link> > View
    </nav> -->
  
    <!-- Product Details Section -->
    <div class="product-container">
    <!-- Product Image -->
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
  
    <!-- Product Information -->
    <div class="product-info">
      <h1 class="name">{{ product.name}}</h1>
      <p class="price">${{ product.price }}</p>
      <p class="rating">
      {{ product.rating }} ({{ product.reviews }} Reviews)
      </p>
      <p v-if="product.stock > 0" class="stock-status in-stock">In Stock</p>
      <p v-else class="stock-status out-of-stock">Out of Stock</p>

      <div class="specs" v-if="product.processor">
      <p>Processor:  {{ product.processor }}</p>
      <p>OS: {{ product.model }}</p>
      <p>Graphics: {{ product.graphics }}</p>
      <p>Memory (RAM): {{ product.ram }}</p>
      <p>Storage: {{ product.storage }} TB</p>
      <p>Display: {{ product.group }}</p>
      </div>
      <div class="specs" v-else-if="product.group==='cpu'">
        <p>{{ product.brand }}</p>
      </div>
      <div class="specs" v-else>
      <p>{{ product.productCod }}</p>
      </div>
      <!-- Quantity and Add to Cart -->
      <div class="cart-actions">
      <div class="quantity-control">
      <button @click="decrementQuantity">-</button>
      <input type="number" v-model="quantity" min="1" />
      <button @click="incrementQuantity">+</button>
      </div>
      <button class="add-to-cart" @click.prevent="ItemsCard">Add to Cart</button>
    </div>
   
      <!-- Additional Information -->
      <div class="delivery-info">
      <p><strong>Free Delivery:</strong> Enter your postal code for delivery availability</p>
      <p><strong>Return Delivery:</strong> Free 30 Days Delivery Returns</p>
      </div>
    </div>
    </div>
  </div>
  </template>
 <script>
 import { Icon } from '@iconify/vue';
 import Header from '@/components/Header.vue';
 import axios from 'axios';
 
 export default {
   name: 'DetailView',
   components: {
   Header,
   Icon,
   },
   data() {
   return {
     product: {},
     quantity: 1,
     userId: null,
   };
   },
   methods: {
   decrementQuantity() {
     if (this.quantity > 1) this.quantity--;
   },
   incrementQuantity() {
     this.quantity++;
   },
   async fetchDetails() {
     const id = this.$route.params.id;
     try {
     const res= await axios.get(`http://localhost:3000/products/${id}`);	
     this.product = res.data;
     if (!this.product) {
      throw new Error("Product not found");
    }
     } catch (error) {
     alert("Can't fetch product details by ID.");
     }
   },
   async ItemsCard() {
     const productCart = {
     productId: this.product.id,
     name: this.product.name,
     quantity: this.quantity,
     group: this.product.group, // Corrected property name here
     };
     
     try {
     this.userId = JSON.parse(localStorage.getItem("user-info"))?.id;
     if (!this.userId) {
       alert("User not logged in");
       this.$router.push("/login"); // Corrected to use $router.push
       return;
     }
 
     const userRes = await axios.get(`http://localhost:3000/users/${this.userId}`);
     const user = userRes.data;

     user.userCart = user.userCart || [];
     user.userCart.push(productCart);
 
     await axios.put(`http://localhost:3000/users/${this.userId}`, user);
     alert("Product added to cart!");
     window.location.href = 'http://localhost:5173/cart';
     } catch (error) {
     alert("Error adding product to cart. Please try again.");
     }
   },
   },
   mounted() {
   this.fetchDetails(); // Fetch the product details when the component mounts
   },
 };
 </script>
  
  
  <style scoped>
  /* Page Container */
  .details-view-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  img{
    width: 598px;
    height: 454px;
  }
  /* Breadcrumb Styles */
  .breadcrumb {
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
  }
 
  .breadcrumb a {
    color: #007bff;
    text-decoration: none;
  }
  
  /* Layout */
  .product-container {
    display: flex;
    gap: 20px;
  }
  
  /* Product Image */
  .product-image img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Product Information */
  .product-info {
    flex: 1;
  }
  
  .price {
    font-size: 24px;
    font-weight: bold;
    color: #050505;
  }
  
  .rating {
    margin: 10px 0;
    font-size: 16px;
    color: #050505;
  }
  
  .stock-status {
    margin: 10px 0;
    font-size: 16px;
  }
  
  .in-stock {
    color: green;
  }
  
  .out-of-stock {
    color: red;
  }
  
  /* Specifications */
  .specs {
    margin: 20px 0;
    font-size: 14px;
  }
  
  .specs p {
    margin-bottom: 8px;
  }
  
  /* Cart Actions */
.cart-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-control input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 16px;
  border: none;
  outline: none;
}

.quantity-control button {
  width: 40px;
  height: 40px;
  background-color: white;
  color: black;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-control button:hover {
  background-color: black;
  color: white;
  
}

.add-to-cart {
  padding: 10px 20px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.add-to-cart:hover {
  background-color: #333;
}

  
  /* Delivery Information */
  .delivery-info {
    margin-top: 20px;
    font-size: 14px;
    color: black;
  }
  </style>
  