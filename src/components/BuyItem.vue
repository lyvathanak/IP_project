<template>
  <div class="cart">
    <div class="name-price">
      <!-- Render the image only if it's provided -->
      <img v-if="image" :src="image" :alt="label" />
      <p>{{ label }}</p>
    </div>
    <p>$ {{ price.toFixed(2) }}</p>
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
      required: true,
    },
    invoice: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

  
<style>
.cart{
    display: flex;
    width:425px;
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
img{
    width:54px;
    height:54px;
}
p{
    margin:0;
}
</style>