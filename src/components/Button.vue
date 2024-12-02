<template>
    <button class="button">{{ buttonText }}</button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttonText: 'Sign Up'
      };
    }
  };
  </script>
  
  <style>
  .sign-up-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>