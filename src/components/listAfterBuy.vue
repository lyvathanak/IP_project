<template>
  <div class="cart">
    <table class="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th class="action">Action</th>
        </tr>
      </thead>
      <div class="empty" style="display: flex; align-items: center; justify-content: center; padding-top: 30px; font-size: 70px; padding-left: 120px;" v-if="!cart.length">
       Your Card is Empty
      </div>
      <tbody v-else-if="cart.length">
        <tr v-for="item in cart" :key="item.productId">
          <td class="product">
            <img :src="item.image" :alt="item.name" class="product-image" />
            <p class="name">{{ item.name }}</p>
          </td>
          <td>${{ item.price }}</td>
          <td>
            <div class="quantity-input">
              {{ item.quantity }}
            </div>
          </td>
          <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td class="edit-delete">
            <Button
            :label="'Delete'"
            @click="removeItemFromCart(item.productId)"
            class="btn-delete"
          />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

 <div class="calculate" v-if="cart.length">
  <div class="btn-add">
    <Button :label="'Add Products'" class="btn-add-product" />
  </div>

  <div class="all">
    <div class="summary">
      <p class="text-cart">Cart Summary</p>
      <div class="cart-total">
        <div class="price">
          <p>Subtotal</p>
          <p>${{ cartSubtotal }}</p>
        </div>
        <div class="price">
          <p>Shipping</p>
          <p>{{ shipping }}</p>
        </div>
        <div class="price">
          <p>Total</p>
          <p>${{ cartTotal }}</p>
        </div>
        <RouterLink to="/payment">
          <Button :label="'Proceed to Checkout'" class="btn-process" />
        </RouterLink>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import axios from "axios";
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      cart: [],
      discount: 0,
      shipping: "Free",
    };
  },
  methods: {
    async removeItemFromCart(itemId) {
  try {
    this.userId = JSON.parse(localStorage.getItem("user-info"))?.id;
    if (!this.userId) {
      alert("User not logged in");
      this.$router.push("/login"); // Redirect to login if not logged in
      return;
    }

    // Fetch the user's current cart from the backend
    const userRes = await axios.get(`http://localhost:3000/users/${this.userId}`);
    const user = userRes.data;

    // Filter out the item to be removed based on productId
    user.userCart = user.userCart.filter(item => item.productId !== itemId);

    // Update the cart in the backend with the modified cart
    await axios.put(`http://localhost:3000/users/${this.userId}`, user);

    alert("Product removed from cart!");
    window.location.href = 'http://localhost:5173/cart'; // Redirect to the cart page to reflect changes
  } catch (error) {
    alert("Error removing product from cart. Please try again.");
  }
},



    async editItem() {
      alert(`Edit item at index ${index}`);
    },
  },
  async created() {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("user-info"));
      if (!loggedInUser) {
        throw new Error("No user is logged in. Please log in to view your cart.");
      }

      const userId = loggedInUser.id;
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      this.cart = response.data.userCart || [];
      
      if (this.cart.length > 0) {
        const productIds = this.cart.map((item) => item.productId).join(",");
        const productsResponse = await axios.get(`http://localhost:3000/products`, {
          params: { ids: productIds }
        });
        const products = productsResponse.data;

        this.cart = this.cart.map((item) => {
          const product = products.find((product) => product.id === item.productId);
          return {
            ...item,
            image: product?.image || "",
            price: product?.price || 0,
          };
        });
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  },
  computed: {
    cartSubtotal() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    cartTotal() {
      return this.cartSubtotal - (this.cartSubtotal * this.discount) / 100;
    },
  },
};
</script>

  <style scoped>
 .sys::placeholder {
  font-family: 'Arial', sans-serif; /* Replace with your desired font */
  font-size: 16px;
  color: gray;
  font-style: italic; /* Optional */
  opacity: 1; /* Ensures the placeholder is fully visible */
}
input{
width: 250px;
height: 48.4px;
border:1px #dbdbdb solid;
transition: all 0.3s ease;
outline: none;
padding-left: 17px;
padding-top: 0px;
padding-bottom: 0px;
background-color: #FBFBFB;
margin-right:20px;
}
.action{
  margin-left: 110px;
}
.calculate{
  padding-top: auto;
  padding-left: 210px;
  padding-right: 210px;
  display: flex;
  padding-bottom: auto;
  justify-content:space-between;
  border-bottom: 1px solid black;
}
input:focus{
    border: 1px #dbdbdb solid;
    border-radius: 9px;
    /* box-shadow: 0 0 8px rgba(76, 175, 80, 0.5); */
}
input[type="text"] {
  padding-left: 17px; /* Removes all padding inside the input */
  font-size: 16px;
  outline: none;
  color:rgb(0, 0, 0);
  border-radius: 9px;
}
  .text-Cart{
    font-weight: bold;
    font-size: 24px;
  }
  .all{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  .summary{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .cart-total{
    width: 330px;
    padding: 10px 10px 50% 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:12px;
    border-bottom: none;
  }
  .price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: #bfbfbf 1px solid
  }
.buy-items{
  display: flex;
  flex-direction: column;
  gap: 28px;
}
  .btn-apply-coupon,
  .btn-process{
    padding:14px 24px;
    border-radius: 1px;
    font-size: 16px;
  }
  .btn-process{
    width: 210px;
  }
  .apply-coupon{
    display: flex;
    align-items: center;
  }
  .btn-delete,.btn-edit{
    padding:8px 20px;
    border-radius: 1px;
    font-size: 16px;
    margin-right: 24px;
  }
  .cart-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin-top: 20px;
  }
  .cart{
    display: flex;
    flex-direction: column;
    padding-bottom:25px;
  }
  .btn-add-product{
    padding:14px 24px;
    border-radius: 1px;
    font-size: 16px;
  }
  thead {
    font-weight: bold;
    background-color: #f7f7f7;
    height: 45px;
  }
  
  th, td {
    padding-left: 110px;
    padding-top: 10px;
    vertical-align: middle;
  }
  
    /* tr:not(:last-child) td {
    border-bottom: none;No lines
  }  */
  
  .product {
    display: flex;
    align-items: center;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  
  .quantity-input {
    width: 62px;
    height: 34px;
    text-align: center;
  }
  
  button {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 8px 24px;
    border-radius: 5px;
    cursor: pointer;
  }
  .name {
    width: 220px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  </style>
  