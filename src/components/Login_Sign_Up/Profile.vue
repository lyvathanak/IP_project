<template>
    <div class="profile-container">
      <h2>Welcome, {{ userInfo.name }}</h2>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
      <!-- Add more profile details if needed --> 
       <RouterLink to="/">Home</RouterLink>
      <button @click="logout">Logout</button>
    </div> 
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInfo: JSON.parse(localStorage.getItem("user-info")), // Get user info from localStorage
      };
    },
    methods: {
      logout() {
        localStorage.removeItem("user-info"); // Remove user info from localStorage
        this.$router.push({ name: "Home" }); // Redirect to login page
      },
    },
  };
  </script>