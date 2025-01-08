<template>
  <div class="field-info-right">
    <div class="buy-items">
      <BuyItem
        v-for="(item, index) in cart"
        :key="index"
        :name="item.name"
        :image="item.image"
        :price="item.price"
      />
    </div>
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
        <p>${{ shipping }}</p>
      </div>
      <div class="price">
        <p>Total</p>
        <p>${{ cartTotal }}</p>
      </div>
    </div>
    <div class="payment-methods">
      <ClickSelect
        v-for="(method, index) in paymentMethods"
        :key="index"
        :label="method.label"
        :groupName="method.groupName"
        :images="method.images"
      />
    </div>
    <Button class="button-submit" :label="'Submit'" />
  </div>
</template>

<script>
import ClickSelect from "@/components/ClickSelect.vue";
import BuyItem from "@/components/BuyItem.vue";
import Button from "@/components/Button.vue";
import BankCard from "@/assets/images/BankCard.png";
import Bkas from "@/assets/images/Bkas.png";
import MasterCard from "@/assets/images/MasterCard.png";
import Visa from "@/assets/images/Visa.png";
import axios from "axios";

export default {
  components: {
    Button,
    BuyItem,
    ClickSelect,
  },
  data() {
    return {
      image: {
        Bkas,
        MasterCard,
        Visa,
        BankCard,
      },
      cart: [],
      discount: 0,
      shipping: 0,
      paymentMethods: [
        {
          label: "Bank",
          groupName: "paymentMethod",
          images: [Bkas, MasterCard, Visa, BankCard],
        },
        {
          label: "Cash",
          groupName: "paymentMethod",
          images: [],
        },
      ],
    };
  },
  computed: {
    cartSubtotal() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    cartTotal() {
      const discountAmount = (this.cartSubtotal * this.discount) / 100;
      return this.cartSubtotal - discountAmount + this.shipping;
    },
  },
  async created() {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('user-info'));
      if (!loggedUser) {
        throw new Error('User not found');
      }
      const userId = loggedUser.id;
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      this.cart = response.data.userCart || [];
      const productIds = this.cart.map(item => item.productId);
      const param = { params: { ids: productIds.join(',') } };
      if (productIds.length > 0) {
        const [lapRes, motherRes, cpuRes] = await Promise.all([
          axios.get(`http://localhost:3000/laptops`, param),
          axios.get(`http://localhost:3000/motherboards`, param),
          axios.get(`http://localhost:3000/cpu`, param),
        ]);
        const allProducts = [...lapRes.data, ...motherRes.data, ...cpuRes.data];
        this.cart = this.cart.map((item) => {
          const product = allProducts.find(
            (product) => product.id === item.productId
          );
          return {
            ...item,
            image: product?.image || "",
            price: product?.price || 0,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #bfbfbf 1px solid;
}
.input-coupon {
  width: 300px;
}
.payment-methods {
  margin-bottom: 10px;
}
.apply-coupon {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 20px;
}
.button-apply,
.button-submit {
  padding: 12px 24px;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}
.field-info-right {
  width: 500px;
}
</style>
