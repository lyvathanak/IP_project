<template>
  <div>
    <Header />
    <form class="container" @submit.prevent="handleSubmit">
     
      <div class="container-payment">
        <div class="fields-payment">
          <div class="field-info-left">
            <div class="field" v-for="field in fields" :key="field.id">
              <label :for="field.id">{{ field.label }}</label>
              <InputField
                :id="field.id"
                v-model="formData[field.model]"
                :placeholder="field.placeholder"
                :type="field.type"
              />
            </div>
            <div class="check-container">
              <input type="checkbox" id="terms" v-model="formData.terms" />
              <label for="terms">Accept terms and conditions</label>
            </div>
          </div>

          <div class="field-info-right">
            <div class="buy-items">
                <div class="cart" v-for="(item, index) in cart" :key="index">
                <div class="name-price">
                  <img v-if="item.image" :src="item.image" :alt="item.name" />
                  <p>{{ item.name }}</p>
                </div>
                <p v-if="typeof item.price === 'number'">${{ item.price.toFixed(2) }}</p>
                <p v-else>
                  {{ item.price }}
                </p>
                </div>
            </div>
            <div class="cart-total">
              <div class="price">
                <p>Subtotal</p>
                <p>${{ cartSubtotal }}</p>
              </div>
              <div class="price">
                <p>Discount</p>
                <p v-if="discount">{{ discount + "%" }}</p>
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
                @click="selectPaymentMethod(method.label)"
              />
            </div>
            <Button class="button-submit" :label="'Submit'" @click="handleSubmit" />
          </div>
        </div>
      </div>

      <div v-if="selectedPaymentMethod === 'Bank'" class="credit-card">
        <h3>Complete Your Credit Card Information</h3>
        <div class="in">
          <label>Card Holder</label>
          <InputField
            id="CardHolder"
            v-model="formData.cardHolder"
            :placeholder="'Card Holder'"
          />
        </div>
        <div class="in">
          <label>Card Number</label>
          <InputField
            id="CardNumber"
            v-model="formData.cardNumber"
            :placeholder="'Card Number'"
            class="input-card"
          />
        </div>
        <div class="cvv-exp">
          <div class="in">
            <label>EXP</label>
            <InputField
              id="ExpireDate"
              v-model="formData.expireDate"
              :placeholder="'Expire Date'"
              class="input-cexp"
            />
          </div>
          <div class="in">
            <label>CVC</label>
            <InputField
              id="CVC"
              v-model="formData.cvc"
              :placeholder="'CVC'"
              class="input-cexp"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import InputField from "@/components/InputField.vue";
import ClickSelect from "@/components/ClickSelect.vue";
import Button from "@/components/Button.vue";
import Bkas from "@/assets/images/Bkas.png";
import MasterCard from "@/assets/images/MasterCard.png";
import Visa from "@/assets/images/Visa.png";
import BankCard from "@/assets/images/BankCard.png";

export default {
  name: "PaymentView",
  components: {
    Header,
    InputField,
    ClickSelect,
    Button,
  },
  data() {
    return {
      labels: ["Home", "Product", "Product Details", "List", "Checkout"],
      formData: {
        firstName: "",
        companyName: "",
        streetAddress: "",
        apartment: "",
        city: "",
        phone: "",
        email: "",
        terms: false,
        couponCode: "",
        cardHolder: "",
        cardNumber: "",
        expireDate: "",
        cvc: "",
      },
      fields: [
        {
          id: "first-name",
          label: "First Name*",
          model: "firstName",
          placeholder: "Enter your first name",
          type: "text",
        },
        {
          id: "company-name",
          label: "Company Name*",
          model: "companyName",
          placeholder: "Enter your company name",
          type: "text",
        },
        {
          id: "street-address",
          label: "Street Address*",
          model: "streetAddress",
          placeholder: "Enter your street address",
          type: "text",
        },
        {
          id: "apartment",
          label: "Apartment, floor, etc. (optional)",
          model: "apartment",
          placeholder: "Enter apartment details",
          type: "text",
        },
        {
          id: "city",
          label: "Town/City*",
          model: "city",
          placeholder: "Enter your city",
          type: "text",
        },
        {
          id: "phone",
          label: "Phone Number*",
          model: "phone",
          placeholder: "Enter your phone number",
          type: "tel",
        },
        {
          id: "email",
          label: "Email Address*",
          model: "email",
          placeholder: "Enter your email address",
          type: "email",
        },
      ],
      paymentMethods: [
        {
          label: "Bank",
          groupName: "paymentMethod",
          images: [Bkas, MasterCard, Visa, BankCard],
        },
        { label: "Cash", groupName: "paymentMethod", images: [] },
      ],
      selectedPaymentMethod: "",
      cart: [],
      discount: 0,
      shipping: 0,
    };
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
    handleSubmit() {
      // Handle form submission logic here
      console.log("Form submitted", this.formData);
    },
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
      const loggedUser = JSON.parse(localStorage.getItem("user-info"));
      if (!loggedUser) {
        throw new Error("User not found");
      }
      const userId = loggedUser.id;
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      this.cart = response.data.userCart || [];
      const productIds = this.cart.map((item) => item.productId);
      const param = { params: { ids: productIds.join(",") } };
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
  },
};
</script>

<style scoped>
.field{
display: flex;
flex-direction: column;
gap: 8px;
}
.check-container{
  display: flex;
  align-items: center;
  gap: 16px;
}
input[type="checkbox"] {
  accent-color: rgb(83, 83, 83);
  width: 20px;
  height: 20px;
}
.field-info-left{
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.field-info-right {
  width: 500px;
}
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

.fields-payment{
  display: flex;
  gap: 80px;
  justify-content: center;
}
.container-payment{
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: auto;
  padding-top: 18px;
}
.container{
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
}
img{
    width:120px;
    border-radius: 10%;
}
.cart{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name-price{
  display: flex;
  align-items: center;
}
.in{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cvv-exp{
display: flex;
gap: 16px;
justify-content: space-between;
align-items: center;
}
.input-cexp
{
  width: 190px;
}
.credit-card{
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
