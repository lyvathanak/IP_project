<template>
  <div>
    <Header />
    <form class="container" @submit.prevent="handleSubmit">
      <div class="container-payment">
        <div class="fields-payment">
          <div class="field-info-left">
            <div class="field" v-for="field in fields" :key="field.id">
              <label :for="field.id">{{ field.label }}</label>
              <input
                :id="field.id"
                v-model="field.value"
                :placeholder="field.placeholder"
                :type="field.type"
                 :class="{'input-error': errors[field.id]}"
              />
              <span v-if="errors[field.id]" class="error-message">{{ errors[field.id] }}</span>
            </div>
            <div class="check-container">
              <input type="checkbox" id="terms" v-model="terms" />
              <label for="terms">Accept terms and conditions</label>
              <span v-if="errors.terms" class="error-message">{{ errors.terms }}</span>
            </div>
          </div>

          <div class="field-info-right">
            <div class="buy-items">
              <div class="cart" v-for="(item, index) in cart" :key="index">
                <div class="name-price">
                  <img v-if="item.image" :src="item.image" :alt="item.name" />
                  <p class="name">{{ item.name }}</p>
                </div>
                <p v-if="typeof item.price === 'number'">${{ item.price.toFixed(2) }}</p>
                <p v-else>{{ item.price }}</p>
              </div>
            </div>

            <div class="cart-total">
              <div class="price">
                <p>Subtotal</p>
                <p>${{ cartSubtotal.toFixed(2) }}</p>
              </div>
              <div class="price">
                <p>Discount</p>
                <p v-if="discount">{{ discount + "%" }}</p>
              </div>
              <div class="price">
                <p>Shipping</p>
                <p>${{ shipping.toFixed(2) }}</p>
              </div>
              <div class="price">
                <p>Total</p>
                <p>${{ cartTotal.toFixed(2) }}</p>
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
            <Button class="button-submit" :label="'Submit'" />
          </div>
        </div>
      </div>

      <div v-show="selectedPaymentMethod === 'Bank'" class="credit-card">
        <h3>Complete Your Credit Card Information</h3>
        <div class="in">
          <label for="CardHolder">Card Holder</label>
          <input
            id="CardHolder"
            v-model="cardHolder"
            placeholder="Card Holder"
              :class="{'input-error': errors.cardHolder}"
          />
          <span v-if="errors.cardHolder" class="error-message">{{ errors.cardHolder }}</span>
        </div>
        <div class="in">
          <label for="CardNumber">Card Number</label>
          <input
            id="CardNumber"
            v-model="cardNumber"
            placeholder="Card Number"
            class="input-card"
             :class="{'input-error': errors.cardNumber}"
          />
          <span v-if="errors.cardNumber" class="error-message">{{ errors.cardNumber }}</span>
        </div>
        <div class="cvv-exp">
          <div class="in">
            <label for="ExpireDate">EXP</label>
            <input
              id="ExpireDate"
              v-model="expireDate"
              placeholder="Expire Date"
              class="input-exp"
               :class="{'input-error': errors.expireDate}"
            />
            <span v-if="errors.expireDate" class="error-message">{{ errors.expireDate }}</span>
          </div>
          <div class="in">
            <label for="CVC">CVC</label>
            <input
              id="CVC"
              v-model="cvc"
              placeholder="CVC"
              class="input-cexp"
                :class="{'input-error': errors.cvc}"
            />
            <span v-if="errors.cvc" class="error-message">{{ errors.cvc }}</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
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
    ClickSelect,
    Button,
  },
  data() {
    return {
      fields: [
      { id: "fullName", label: "Full Name", value: "", placeholder: "Your Full Name", type: "text" },
      { id: "companyName", label: "Company Name", value: "", placeholder: "Your Company Name", type: "text" },
      { id: "streetAddress", label: "Street Address", value: "", placeholder: "Your Street Address", type: "text" },
      { id: "apartment", label: "Apartment, floor, etc. (optional)", value: "", placeholder: "Apartment, floor, etc.", type: "text" },
      { id: "townCity", label: "Town/City", value: "", placeholder: "Your Town/City", type: "text" },
      { id: "phoneNumber", label: "Phone Number", value: "", placeholder: "Your Phone Number", type: "text" },
      { id: "emailAddress", label: "Email Address", value: "", placeholder: "Your Email Address", type: "email" },
      ],
      errors: {},
      paymentMethods: [
        { label: "Bank", groupName: "paymentMethod", images: [Bkas, MasterCard, Visa, BankCard] },
        { label: "Cash", groupName: "paymentMethod", images: [] },
      ],
      selectedPaymentMethod: localStorage.getItem("selectedPaymentMethod") || "",
      cart: [],
      discount: 0,
      shipping: 0,
      terms: false,
      cardHolder: "",
      cardNumber: "",
      expireDate: "",
      cvc: "",
    };
  },
  computed: {
    cartSubtotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    cartTotal() {
      return this.cartSubtotal + this.shipping - (this.discount / 100 * this.cartSubtotal);
    },
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
      if (!method === 'Bank') {
        this.cardHolder = "";
        this.cardNumber = "";
        this.expireDate = "";
        this.cvc = "";
      } else {
        // Clear the credit card details when switching away from 'Bank' method
        this.cardHolder = "";
        this.cardNumber = "";
        this.expireDate = "";
        this.cvc = "";
      }
    },
    validate() {
      this.errors = {};

      // Validate required fields
      this.fields.forEach(field => {
        if (!field.value) {
          this.errors[field.id] = `${field.label} is required`;
        }
      });

      // Validate terms
      if (!this.terms) {
        this.errors.terms = "You must accept the terms and conditions.";
      }

      // Validate card details (only for Bank payment method)
      if (this.selectedPaymentMethod === 'Bank') {
        if (!this.cardHolder) {
          this.errors.cardHolder = "Card holder name is required.";
        }
        if (!this.cardNumber) {
          this.errors.cardNumber = "Card number is required.";
        }
        if (!this.expireDate) {
          this.errors.expireDate = "Expiration date is required.";
        }
        if (!this.cvc) {
          this.errors.cvc = "CVC is required.";
        }
      }

      // Return true if no errors
      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      if (!this.validate()) {
        return;
      }
      console.log("Selected payment method:", this.selectedPaymentMethod);
      try {
        const loggedUser = JSON.parse(localStorage.getItem("user-info"));
        if (!loggedUser) {
          throw new Error("User not found in localStorage.");
        }
        if (this.cart.length === 0) {
          throw new Error("Your cart is empty.");
        }
        const userId = loggedUser.id;
        const user = loggedUser;
        const items = this.cart;
        const selectedPaymentMethod = this.selectedPaymentMethod;
        const cardDetails = selectedPaymentMethod === "Bank" ? { 
          cardHolder: this.cardHolder,
          cardNumber: this.cardNumber,
          cvv: this.cvc,
          expiryDate: this.expireDate
        } : null;
        const Address = {
          FullName: this.fields.find(field => field.id === "fullName").value,
          CompanyName: this.fields.find(field => field.id === "companyName").value,
          StreetAddress: this.fields.find(field => field.id === "streetAddress").value,
          Apartment: this.fields.find(field => field.id === "apartment").value,
          Town: this.fields.find(field => field.id === "townCity").value,
          PhoneNumber: this.fields.find(field => field.id === "phoneNumber").value,
          Email: this.fields.find(field => field.id === "emailAddress").value,
        };
        
        const amount = items.reduce((total, item) => total + (item.price * item.quantity), 0);
        const invoiceId = `INV${Date.now()}`;

        const invoice = {
          invoiceId: invoiceId,
          invoiceNumber: invoiceId,
          invoiceDate: new Date().toISOString().split('T')[0],
          amount: amount,
          customerName: user.name,
          paymentMethod: selectedPaymentMethod,
          Address: Address,
          cardDetails: cardDetails, // Store card details in the invoice
          items: items.map(item => ({
            productId: item.productId,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          }))
        };

        // Save the cart details in localStorage before clearing the cart
        localStorage.setItem('cartDetails', JSON.stringify(items));

        const newPurchase = {
          purchaseId: `buy${Date.now()}`,
          items: items,
        };

        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const updatedUser = response.data;

        await axios.patch(`http://localhost:3000/users/${userId}`, {
          userBought: [...updatedUser.userBought, newPurchase],
          userCart: [],
        });

        await axios.patch(`http://localhost:3000/users/${userId}`, {
          invoices: [...(updatedUser.invoices || []), invoice],
        });

        this.cart = [];  // Clear the cart from the frontend
        this.selectedPaymentMethod = "";
        window.location.href = 'http://localhost:5173/products/all-components';
      
      } catch (error) {
        console.error("Error during submission:", error.message);
      }
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

      const productIds = this.cart.map(item => item.productId);
      const param = { params: { ids: productIds.join(",") } };

      if (productIds.length > 0) {
        const products= await axios.get("http://localhost:3000/products", param);
        const allProducts = products.data;
        this.cart = this.cart.map((item) => {
          const product = allProducts.find((product) => product.id === item.productId);
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
.input-error {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 12px;
}
.sys::placeholder {
  font-family: 'Arial', sans-serif; /* Replace with your desired font */
  font-size: 16px;
  color: gray;
  font-style: italic; /* Optional */
  opacity: 1; /* Ensures the placeholder is fully visible */
}
.name {
  width: 160px;
  overflow: hidden;
  text-overflow: none;
  white-space: nowrap;
}
.name:hover {
  overflow: visible;
  white-space: normal;
  font-size: small;
}
input {
  width: 450px;
  height: 48.4px;
  border: 1px #dbdbdb solid;
  transition: all 0.3s ease;
  outline: none;
  padding-left: 17px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #FBFBFB;
}
input:focus {
  border: 1px #dbdbdb solid;
  border-radius: 9px;
  /* box-shadow: 0 0 8px rgba(76, 175, 80, 0.5); */
}
input[type="text"] {
  padding-left: 17px; /* Removes all padding inside the input */
  font-size: 16px;
  outline: none;
  color: rgb(0, 0, 0);
  border-radius: 9px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.check-container {
  display: flex;
  align-items: center;
  gap: 16px;
}
input[type="checkbox"] {
  accent-color: rgb(83, 83, 83);
  width: 20px;
  height: 20px;
}
.field-info-left {
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
.fields-payment {
  display: flex;
  gap: 80px;
  justify-content: center;
}
.container-payment {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: auto;
  padding-top: 18px;
}
.container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
}
img {
  width: 120px;
  border-radius: 10%;
}
.cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name-price {
  display: flex;
  align-items: center;
}
.in {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cvv-exp {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}
.input-exp,.input-cexp {
  width: 190px;
}
.credit-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
