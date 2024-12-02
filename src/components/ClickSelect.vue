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

<style>
img{
  object-fit: contain;
}
.select {
  display: flex;
  align-items: center;
}
.container-select {
  display: flex;
  align-items: center;
  gap: 155px;
}
.images {
  display: flex;
  gap: 3px;
}
input[type='radio'] {
  accent-color: rgb(83, 83, 83);
  width: 25px;
  height: 25px;
}
</style>
