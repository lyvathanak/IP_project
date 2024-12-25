<template>
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
      />
    </div>

    <div class="apply-coupon">
      <InputField
        id="CouponCode"
        v-model="formData.couponCode"
        :placeholder="'Coupon Code'"
        class="input-coupon"
      />
      <Button class="button-apply" :label="'Apply Coupon'"/>
    </div>

    <Button class="button-submit" :label="'Submit'" />
  </div>
</template>
<script>
import ClickSelect from "@/components/ClickSelect.vue";
import BuyItem from "@/components/BuyItem.vue";
import InputField from "@/components/InputField.vue";
import Button from "@/components/Button.vue";
import BankCard from "@/assets/images/BankCard.png";
import Bkas from "@/assets/images/Bkas.png";
import MasterCard from "@/assets/images/MasterCard.png";
import Monitor from "@/assets/images/Monitor.png";
import Visa from "@/assets/images/Visa.png";

export default {
  components: {
    Button,
    BuyItem,
    InputField,
    ClickSelect,
  },
  data() {
    return {
      formData: {
        couponCode: "",
      },
      image: {
        Bkas,
        MasterCard,
        Visa,
        BankCard,
        Monitor,
      },
      buyItems: [
        {
          label: "Monitor",
          invoice: "ReceiptItem",
          image: Monitor,
          price: 12.3,
        },
        {
          label: "Monitor",
          invoice: "ReceiptItem",
          image: Monitor,
          price: 12.3,
        },
        {
          label: "Subtotal",
          invoice: "ReceiptItem",
          price: 12.3,
        },
        {
          label: "Shipping",
          invoice: "ReceiptItem",
          price: "Free",
        },
        {
          label: "Total",
          invoice: "ReceiptItem",
          price: 12.3,
        },
      ],
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
};
</script>
<style>
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
.apply-coupon{
  display: flex;
  align-items: center;
  gap:24px;
  padding-bottom: 20px;
}
.button-apply,
.button-submit{
  padding: 12px 24px; 
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

</style>
