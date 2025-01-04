<template>
  <div class="cart">
    <table class="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="cart.length">
        <tr v-for="(item, index) in cart" :key="item.productId">
          <td class="product">
            <img :src="item.image" :alt="item.name" class="product-image" />
            <p>{{ item.name }}</p>
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
              @click="removeItem(index)"
              class="btn-delete"
            />
            <Button
              :label="'Edit'"
              @click="editItem(index)"
              class="btn-delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="btn-add">
    <Button :label="'Add Products'" class="btn-add-product" />
  </div>

  <div class="all">
    <form class="apply-coupon" @submit.prevent="applyCoupon">
    <!-- Input for coupon code -->
    <input
      id="CouponCode"
      placeholder="Enter Coupon Code"
      v-model="couponCode" 
      class="input-coupon"
    />
    
    <!-- Button to apply the coupon -->
    <Button
      type="submit"
      :label="'Apply Coupon'" 
      class="btn-apply-coupon"
    />
  </form>

    <div class="summary">
      <p class="text-Cart">Cart Summary</p>
      <div class="cart-total">
        <div class="price">
          <p>Subtotal</p>
          <p>${{ cartSubtotal }}</p>
        </div>
        <div class="price">
          <p>Discount</p>
          <p v-if="discount">{{ discount + '%' }}</p>
        </div>
        <div class="price">
          <p>Shipping</p>
          <p>{{ shipping }}</p>
        </div>
        <div class="price">
          <p>Total</p>
          <p>${{ cartTotal }}</p>
        </div>
        <Button :label="'Proceed to Checkout'" class="btn-process" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "./Button.vue";
// import InputField from "./InputField.vue";
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';

export default {
  components: {
    Button,
    // InputField,
  },
  setup() {
    const cartStore = useCartStore();
    const cart = computed(() => cartStore.items);

    return {
      cart,
    };
  },
 
  data() {
    return {
    //cart: [],
    discount:0,
    shipping: "Free",
    couponCodes:["SAVE10","SAVE20","WELCOME5"],
    couponCode:""
    };
  },
  methods: {
    applyCoupon() {
    
    if (this.couponCodes.includes(this.couponCode)) {
      let discount = 0;
      if (this.couponCode === "SAVE10") {
        discount = 10;
      } else if (this.couponCode === "SAVE20") {
        discount = 20;
      } else if (this.couponCode === "WELCOME5") {
        discount = 5;
      }
      this.discount = discount;
      alert(`Coupon applied: ${this.discount}% off!`);
    } else {
      this.discount = 0;
      alert("Invalid coupon code.");
    }
  },
    removeItem(index) {
      // this.cart.splice(index, 1);
      const cartStore = useCartStore();
      cartStore.removeFromCart(index);
    },
    editItem(index) {
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
      const cartStore = useCartStore();
      //this.cart = response.data.userCart || [];
      cartStore.setCart(response.data.userCart || []);

      const productIds = this.cart.map((item) => item.productId);
      if (productIds.length > 0) {
        const productRes = await axios.get(`http://localhost:3000/laptops`, {
          params: { ids: productIds.join(",") },
        });

        // this.cart = this.cart.map((item) => {
        //   const product = productRes.data.find(
        //     (product) => product.id === item.productId
        //   );
        //     return {
        //       ...item,
        //       image: product?.image || "",
        //       price: product?.price || 0,
        //     };
        //   });
        // }

        cartStore.setCart(cartStore.items.map((item) => {
          const product = productRes.data.find(
            (product) => product.id === item.productId
          );
          return {
            ...item,
            image: product?.image || "",
            price: product?.price || 0,
          };
        }));
      }

    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  },
  computed: {
  cartSubtotal() {
    return this.cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  },
  cartTotal() {
      const subtotal = parseFloat(this.cartSubtotal);
      const total = this.discount
        ? subtotal - (subtotal * this.discount) / 100
        : subtotal;
      return total.toFixed(2);
    },
},
};
</script>


  <style scoped>
 
  .text-Cart{
    font-weight: bold;
    font-size: 24px;
  }
  .all{
    display: flex;
    justify-content: space-between;
    padding:10px 210px;
    align-items: start;
    border-bottom: 1px solid black;
  }
  .btn-add{
    padding-top: 20px;
    padding-left: 210px;
  }
  .summary{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .cart-total{
    width: 330px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:12px;
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
  .btn-delete{
    padding:8px 20px;
    border-radius: 1px;
    font-size: 16px;
    margin-left: 12px;
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
    border-bottom: none;
    
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
  </style>
  