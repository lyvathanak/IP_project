<template>
  <div class="container">
    <template v-for="(label, index) in labels" :key="index">
      <p>{{ label }}</p>
      <Icon v-if="index < labels.length - 1" icon="line-md:chevron-small-right" width="24" height="24" />
    </template>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "List",
  components: {
    Icon,
  },
  props: {
    labels: {
      type: Array,
      required: true, // Makes sure `labels` is always passed
    },
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>

<style>
.container{
    display: flex;
    align-items: center;
    justify-content: start;
}
</style>