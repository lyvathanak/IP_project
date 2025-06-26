<template>
  <div>
    <h2>Your Cart</h2>
    <div v-if="cart.length">
      <div v-for="item in cart" :key="item.productId" class="cart-item">
        <h3>{{ item.name || "Unnamed Product" }}</h3>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Group: {{ item.group }}</p>
        <div v-if="item.image">
          <img :src="item.image" :alt="item.name" class="cart-item-image" />
        </div>
      </div>
    </div>
    <p v-else>Your cart is empty.</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cart: [],
      errorMessage: "",
    };
  },
  async created() {
    try {
      // Fetch the logged-in user's ID from localStorage
      const loggedInUser = JSON.parse(localStorage.getItem("user-info"));
      if (!loggedInUser) {
        throw new Error("No user is logged in. Please log in to view your cart.");
      }

      const userId = loggedInUser.id;
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      this.cart = response.data.userCart || [];

      const productIds = this.cart.map((item) => item.productId);
      if (productIds.length > 0) {
        // Fetch products data
        const [laptopsRes, motherboardsRes,cpuRes] = await Promise.all([
          axios.get(`http://localhost:5000/laptops`),
          axios.get(`http://localhost:5000/motherboards`),
          axios.get(`http://localhost:5000/cpu`),
        ]);

        const allProducts = [...laptopsRes.data, ...motherboardsRes.data,...cpuRes.data];

        // Merge product details into cart items
        this.cart = this.cart.map((item) => {
          const product = allProducts.find((p) => p.id === item.productId);
          return {
            ...item,
            name: product?.name || "Unknown Product",
            image: product?.image || "",
          };
        });
      }
    } catch (error) {
      this.errorMessage = error.message || "Error fetching cart.";
      console.error("Error fetching cart:", error);
    }
  },
};
</script>

<style scoped>
.cart-item {
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 8px;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
