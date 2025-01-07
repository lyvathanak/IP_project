<template>
  <Header />
  <form class="container">
    <div class="container-payment">
      <List :labels="labels" />
      <div class="fields-payment">
        <!-- PayLeft_field content -->
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

        <!-- PayRight_field content -->
        <div class="field-info-right">
          <div class="buy-items">
            <BuyItem
              v-for="(item, index) in buyItems"
              :key="index"
              :label="item.label"
              :invoice="item.invoice"
              :image="item.image"
              :price="item.price"
            />
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

    <div v-if="selectedPaymentMethod === 'Bank'" class="credit-card">
      <div class="in">
        <label>Card Holder</label>
        <InputField id="CardHolder" :placeholder="'Card Holder'" />
      </div>
      <div class="in">
        <label>Card Number</label>
        <InputField
          id="CardNumber"
          :placeholder="'Card Number'"
          class="input-card"
        />
      </div>
      <div class="cvv-exp">
        <div class="in">
          <label>Expire Date</label>
          <InputField
            id="ExpireDate"
            :placeholder="'Expire Date'"
            class="input-cexp"
          />
        </div>
        <div class="in">
          <label>CVC</label>
          <InputField id="CVC" :placeholder="'CVC'" class="input-cexp" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
import InputField from "@/components/InputField.vue";
import BuyItem from "@/components/BuyItem.vue";
import ClickSelect from "@/components/ClickSelect.vue";
import Button from "@/components/Button.vue";
import Monitor from "@/assets/images/Monitor.png";
import Bkas from "@/assets/images/Bkas.png";
import MasterCard from "@/assets/images/MasterCard.png";
import Visa from "@/assets/images/Visa.png";
import BankCard from "@/assets/images/BankCard.png";

export default {
  name: "PaymentView",
  components: {
    Header,
    List,
    InputField,
    BuyItem,
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
      },
      fields: [
        { id: "first-name", label: "First Name*", model: "firstName", placeholder: "Enter your first name", type: "text" },
        { id: "company-name", label: "Company Name*", model: "companyName", placeholder: "Enter your company name", type: "text" },
        { id: "street-address", label: "Street Address*", model: "streetAddress", placeholder: "Enter your street address", type: "text" },
        { id: "apartment", label: "Apartment, floor, etc. (optional)", model: "apartment", placeholder: "Enter apartment details", type: "text" },
        { id: "city", label: "Town/City*", model: "city", placeholder: "Enter your city", type: "text" },
        { id: "phone", label: "Phone Number*", model: "phone", placeholder: "Enter your phone number", type: "tel" },
        { id: "email", label: "Email Address*", model: "email", placeholder: "Enter your email address", type: "email" },
      ],
      buyItems: [
        { label: "Monitor", invoice: "ReceiptItem", image: Monitor, price: 12.3 },
        { label: "Monitor", invoice: "ReceiptItem", image: Monitor, price: 12.3 },
        { label: "Subtotal", invoice: "ReceiptItem", price: 12.3 },
        { label: "Shipping", invoice: "ReceiptItem", price: "Free" },
        { label: "Total", invoice: "ReceiptItem", price: 12.3 },
      ],
      paymentMethods: [
        { label: "Bank", groupName: "paymentMethod", images: [Bkas, MasterCard, Visa, BankCard] },
        { label: "Cash", groupName: "paymentMethod", images: [] },
      ],
      selectedPaymentMethod: "",
    };
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
  },
};
</script>


<style>
.container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: column;
}
.fields-payment{
display: flex;
justify-content: space-between;
gap:20px;
}

  .container-payment {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
.cvv-exp {
  display: flex;
  gap: 129px;
  justify-content: space-between;
}
.input-cexp {
  width: 150px;
}
.in {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.credit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.buy-items{
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.input-coupon{
  width: 300px;
}
.payment-methods{
  margin-bottom: 10px;
}
.button-submit{
  padding: 12px 24px; 
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}
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
</style>
