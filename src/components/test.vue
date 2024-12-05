<template>
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
import BankCard from '@/assets/images/BankCard.png';
import Bkas from '@/assets/images/Bkas.png';
import MasterCard from '@/assets/images/MasterCard.png';
import Monitor from '@/assets/images/Monitor.png';
import Visa from '@/assets/images/Visa.png';
import BuyItem from '@/components/BuyItem.vue';
import Header from '@/components/Header.vue';
import ClickSelect from './components/ClickSelect.vue';
import InputField from './components/InputField.vue';

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