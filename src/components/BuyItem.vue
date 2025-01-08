<template>
  <div class="cart">
    <div class="name-price">
      <!-- Render the image only if it's provided -->
      <img v-if="image" :src="image" :alt="label" />
      <p>{{ label }}</p>
    </div>
    <!-- Check if price is a number or string -->
    <p v-if="typeof price === 'number'">$ {{ price.toFixed(2) }}</p>
    <p v-else>{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false, // Not all items may have images
    },
    invoice: {
      type: String,
      required: false,
    },
    price: {
      type: [Number, String], // Allow both Number and String
      required: true,
    },
  },
};
</script>

  
<style scoped>
.cart{
    display: flex;
    justify-content: space-between;
     border-bottom: 1px gray solid;
     align-items: center;
}
.name-price{
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap:24px;
}
p{
    margin:0;
}
</style>