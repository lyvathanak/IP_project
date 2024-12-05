<template>
    <Header/>
    <div class="details-view-page">
      <!-- Breadcrumb Navigation -->
      <nav class="breadcrumb">
        <router-link to="/">Home</router-link> > 
        <router-link to="/laptop">Laptop</router-link> > View
      </nav>
  
      <!-- Product Details Section -->
      <div class="product-container">
        <!-- Product Image -->
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>
  
        <!-- Product Information -->
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p class="price">${{ product.price }}</p>
          <p class="rating">
            {{ product.rating }} ({{ product.reviews }} Reviews)
          </p>
          <p v-if="product.stock > 0" class="stock-status in-stock">In Stock</p>
          <p v-else class="stock-status out-of-stock">Out of Stock</p>
  
          <!-- Product Specifications -->
          <div class="specs">
            <p>Processor:  {{ product.specs.processor }}</p>
            <p>OS: {{ product.specs.os }}</p>
            <p>Graphics: {{ product.specs.graphics }}</p>
            <p>Memory (RAM): {{ product.specs.ram }}</p>
            <p>Storage: {{ product.specs.storage }}</p>
            <p>Display: {{ product.specs.display }}</p>
          </div>
  
          <!-- Quantity and Add to Cart -->
          <div class="cart-actions">
            <div class="quantity-control">
              <button @click="decrementQuantity">-</button>
              <input type="number" v-model="quantity" min="1" />
              <button @click="incrementQuantity">+</button>
            </div>
            <button class="add-to-cart" @click="addToCart">Add to Cart</button>
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
  import alienware from '@/assets/images/alienware.png'
  export default {
    name: 'DetailView',
             components:{
                Header,
                Icon},
    data() {
      return {
        product: {
          name: "Alienware m18 R2 Gaming Laptop",
          price: 1992.0,
          rating: 4.5,
          reviews: 150,
          stock: 10,
          image:alienware, // image
          specs: {
            processor: "Up to Intel® Core™ i9 14900HX",
            os: "Windows 11 Home or Windows 11 Pro",
            graphics: "Up to NVIDIA® GeForce RTX™ 4090",
            ram: "Up to 64 GB",
            storage: "Up to 8 TB",
            display: '18"',
          },
        },
        quantity: 1, // Default quantity set to 1
      };
    },
    methods: {
      decrementQuantity() {
        if (this.quantity > 1) this.quantity--;
      },
      incrementQuantity() {
        this.quantity++;
      },
      addToCart() {
        alert(`Added ${this.quantity} of ${this.product.name} to your cart!`);
      },
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
  