<template>
  <div class="cart">
    <div class="name-price">
      <img v-if="image" :src="image" :alt="label" />
      <p>{{ name }}</p>
    </div>
    <p v-if="typeof price === 'number'">$ {{ price.toFixed(2) }} <span>$</span></p>
    <p v-else>{{ price }} <span>$</span></p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    price: {
      type: [Number, String],
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
img{
    width:120px;
    border-radius: 10%;

}
</style>