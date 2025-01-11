<template>
  <form class="form-container" @submit.prevent="signUp">
    <img src="../assets/logo.svg" alt="Logo" class="form-logo" />
    <p>Username</p>
    <input
      type="text"
      placeholder="Enter your username"
      class="form-input"
      v-model="name"
      required
    />
    <p>Email</p>
    <input
      type="email"
      placeholder="Enter your email"
      class="form-input"
      v-model="email"
      required
    />
    <p>Password</p>
    <input
      type="password"
      placeholder="Enter your password"
      class="form-input"
      v-model="password"
      required
    />
    <button type="submit" class="form-button">Sign Up</button>
    <RouterLink to="login" class="form-link">
      Already have an account? Log In
    </RouterLink>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      try {
        const result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
          userBought: [],
          userCart: [],
  
        });
        if (result.status === 201) {
          alert("Sign-up successful!");
          this.$router.push({ name: "Login" });
        }
      } catch (error) {
        console.error(error);
        alert("Error during sign-up. Try again.");
      }
    },
    
  },
};
</script>


  <style scoped>
  /* General Form Styling */
  .form-container {
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  /* Logo Styling */
  .form-logo {
    width: 100px;
    margin: 0 auto 20px;
  }
  
  /* Input Fields */
  .form-input {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-input:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }
  
  /* Button Styling */
  .form-button {
    width: 100%;
    padding: 12px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-button:hover {
    background-color: #218838;
  }
  
  .form-button:active {
    background-color: #1e7e34;
  }
  
  /* Link Styling */
  .form-link {
    margin-top: 15px;
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }
  
  .form-link:hover {
    text-decoration: underline;
  }
  
  /* Paragraph Styling */
  p {
    margin: 0;
    font-weight: bold;
    text-align: left;
    color: #555;
  }
  
  /* Responsive Design */
  @media (max-width: 480px) {
    .form-container {
      width: 90%;
    }
  
    .form-input {
      font-size: 14px;
    }
  
    .form-button {
      font-size: 14px;
    }
  
    .form-link {
      font-size: 12px;
    }
  }
  </style>
  
  