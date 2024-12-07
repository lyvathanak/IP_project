<template>
    <div>
      <input type="type" placeholder="placeholer" v-model="inputValue" />
      <button @click="fillInput">Fill Input</button>
    </div>
  </template>
  
  <script>
  export default {
    props:{
        
        type: String,
        placeholder: String,
        inputValue: String,
    },
    data() {
      return {
        inputValue: '', // Data property for the input field
      };
    },
    methods: {
      fillInput() {
        this.inputValue = 'Filled Value'; // Set the input field value
      },
    },
  };
  </script>
  