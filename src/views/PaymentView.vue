<template>
    <Header/>
<div class="container">
  <div class="container-payment">
    <List :labels="labels"/>
      <div class="fields-payment">
      <PayLeft_field/>
      <PayRight_field/>
      </div>
  </div>
</div>
</template>
<script>
import PayRight_field from '@/components/PayRight_field.vue';
import Header from '@/components/Header.vue';
import List from '@/components/List.vue';
import PayLeft_field from '@/components/PayLeft_field.vue';
export default {
  name: "PaymentView",
  components: {
    Header,
    List,
    PayLeft_field,
    PayRight_field
  },
  data() {
    return {
      labels: ["Home", "Product", "Product Details", "List","Checkout"], // Static labels
    };
  },
};
</script>
<style>
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
}
.container{
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
