<template>
  <header class="header">
    <div class="logo">GOODeal</div>
    <nav class="nav">
      <a href="#">Component</a>
      <a href="#">Laptop</a>
      <a href="#">Storage</a>
      <a href="#">Accessory</a>
    </nav>
    <div class="actions">
      <span class="search-icon">Search</span>
      <a href="#" class="cart">cart</a>
      <a href="#" class="account">Account</a>
    </div>
  </header>
</template>
  
  <script>
  
  // No additional JavaScript logic is needed for this static header.
  </script>
  
  <style scoped>
  /* General Reset */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  /* Header Styling */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1.25rem;
    background-color: black;
    color: white;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav {
    display: flex;
    gap: 1.25rem;
  }
  
  .nav a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .nav a:hover {
    text-decoration: underline;
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 0.938px;
  }
  
  .search-icon {
    cursor: pointer;
  }
  
  .cart,
  .account {
    color: white;
    text-decoration: none;
  }
  
  .cart:hover,
  .account:hover {
    text-decoration: underline;
  }
  </style>
  
