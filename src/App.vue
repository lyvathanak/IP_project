<template>
  <Header></Header>
  <InputField/>
</template>

<script>
import Header from '@/components/Header.vue';
import InputField from '@/components/InputField.vue';

export default {
  components: {
    Header,InputField
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
