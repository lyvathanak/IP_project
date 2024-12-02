<template>
  <Header></Header>
    <!-- BuyItem with an image -->
    <BuyItem 
      label="Controller"
      invoice="ReceiptItem"
      :image="Monitor" 
      :price="12.3"
    />

    <!-- BuyItem without an image -->
    <BuyItem 
      label="Subtotal"
      invoice="ReceiptItem"
      :price="5.0"
    />
  
  <InputField />
  <ClickSelect
    label="Bank"
    groupName="paymentMethod"
    :images="[Bkas, MasterCard, Visa, BankCard]"
  />
  <ClickSelect
    label="Cash"
    groupName="paymentMethod"
    :images="[]"
  />
</template>
<script>
import Monitor from '@/assets/images/Monitor.png'
import Header from '@/components/Header.vue';
import BuyItem from '@/components/BuyItem.vue';
import InputField from './components/InputField.vue';
import ClickSelect from './components/ClickSelect.vue';
import Bkas from '@/assets/images/Bkas.png';
import MasterCard from '@/assets/images/MasterCard.png';
import Visa from '@/assets/images/Visa.png';
import BankCard from '@/assets/images/BankCard.png';

export default {
  components: {
    Header,
    BuyItem,
    InputField,
    ClickSelect,
  },
  data() {
    return {
      Bkas,
      MasterCard,
      Visa,
      BankCard,
      Monitor
    };
  },
};
</script>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
