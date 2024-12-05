<template>
  <div class="container-select">
    <div class="select">
      <input type="radio" :name="groupName" />
      <p>{{ label }}</p>
    </div>
    <div class="images" v-if="images && images.length">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="label" />
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: () => [],
    },
    groupName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.select {
  display: flex;
  align-items: center;
}
.container-select{
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.images {
  display: flex;
  align-items: center;
  gap: 3px;
}
input[type='radio'] {
  accent-color: rgb(83, 83, 83);
  width: 26px;
  height: 26px;
}
img{
  object-fit: contain;
  width: 36;
  height: 36px;
}
</style>
