<template>
  <form class="form-container" @submit.prevent="login">
    <h1 class="form-logo" >Log in</h1>
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
    <button type="submit" class="form-button">Log In</button>
    <RouterLink to="/sign-up" class="form-link">
      Don't have an account? Sign Up
    </RouterLink>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const result = await axios.get(
          `http://localhost:5000/users?email=${this.email}&password=${this.password}`
        );
        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0])); // Save user info
          this.$router.push({ name: "Account" }); // Redirect to the account page after login
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error(error);
        alert("Login failed. Try again.");
      }
    },

  },
};
</script>

<style scoped>
/* General Form Styling */
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Logo Styling */
.form-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 100px;
  margin-bottom: 20px;
}

/* Input Fields */
.form-input {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* Input Hover and Focus */
.form-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Button Styling */
.form-button {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}

/* Link Styling */
.form-link {
  display: block;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

.form-link:hover {
  text-decoration: underline;
}
p{
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: left; /* Add this line */
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
  
