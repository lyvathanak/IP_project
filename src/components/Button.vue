<template>
    <button class="button">{{ label }}</button>
  </template>
  
  <script>
  export default {
    props:{
      label:{
      type:String,
      required:true,
    }
    }
  };
  </script>
  
  <style scoped>
  .sign-up-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>