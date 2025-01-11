<template>
  <div class="frame">
    <div class="container">
      <img :src="userInfo.profileImage || 'default-image-url.jpg'" alt="Profile Image" class="profile" >
        <input type="file" id="media" accept="image/*" @change="handleFileUpload" class="upload" />
    <div v-if="!isEditing" class="box">
      <div class="header">
      <h1>Account</h1>
      </div>
      <div class="nameBox">
      <div class="address">
        <p>Full Name</p>
        <p class="text">{{ userInfo.name }}</p>
      </div>
      </div>
  
      <div class="emailBox">
      <div class="address">
        <p>Email</p>
        <p class="text">{{ userInfo.email }}</p>
      </div>
  
      <RouterLink to="/" class="address" style="cursor: pointer;">
        <p>Invoices</p>
        <p class="text">Your purchase</p>
      </RouterLink>
      </div>
     <div class="conC">
      <RouterLink to="/" class="saveChange"style="cursor: pointer;">Back</RouterLink>
      <div class="button">
      <button class="edit" style="cursor: pointer;" @click="Edit">Edit</button>
      <button class="logOut"style="cursor: pointer;" @click="logout">Logout</button>
      </div>
     </div>
    </div>
  
    <div v-else class="box">
      <h1 class="header">Edit Account</h1>
      <div class="nameBox">
      <div class="firstName">
        <p>User Name</p>
        <input type="text" v-model="editUser.name" placeholder="Name" required class="inputClass1" />
      </div>
      </div>
  
      <div class="emailBox">
      <div class="email">
        <p>Email</p>
        <input type="email" v-model="editUser.email" placeholder="example@gmail.com" required class="inputClass1" />
      </div>
      </div>
  
      <div class="password">
      <div class="changePass">
        <p>Password Changes</p>
        <input type="password" v-model="editUser.currentPassword" placeholder="Current Password" required class="inputClass2" />
      </div>
      <input type="password" v-model="editUser.newPassword" placeholder="New Password" required class="inputClass2" />
      <input type="password" v-model="editUser.confirmPassword" placeholder="Confirm Password" required class="inputClass2" />
      </div>
     <div class="conC">
      <RouterLink to="/" class="saveChange" style="cursor: pointer;">Back</RouterLink>
      <div class="confirm">
      <button class="edit" style="cursor: pointer; " @click="Cancel">Cancel</button>
      <button class="saveChange" style="cursor: pointer;" @click="SaveChange">Save Changes</button>
      </div>
     </div>
    </div>
    </div>
  </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        userInfo: JSON.parse(localStorage.getItem("user-info")), // Get user info from localStorage
        editUser: {
          name: '',
          email: '',
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
          previewImage:''
        },
        isEditing: false,
      };
    },
    methods: {
      handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          this.profileImage = reader.result; // Get Base64 string
          await this.updateProfileImage();
        };
        reader.readAsDataURL(file); // Convert file to Base64 string
      }
    },
    async updateProfileImage() {
      try {
        const updatedData = {
          ...this.userInfo,
          profileImage: this.profileImage,
        };
        const res = await axios.put(`http://localhost:3000/users/${this.userInfo.id}`, updatedData);
        if (res.status === 200) {
          this.userInfo = res.data;
          localStorage.setItem("user-info", JSON.stringify(this.userInfo));
        }
      } catch (error) {
        console.error("Failed to update profile image:", error);
      }
    },
      async SaveChange() {
    if (this.editUser.newPassword && this.editUser.newPassword !== this.editUser.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    try {
      // Fetch the current user data to preserve userCart and userBought
      const currentUser = await axios.get(`http://localhost:3000/users/${this.userInfo.id}`);
      
      // Merge the existing data with the new updates
      const updatedData = {
        ...currentUser.data,
        name: this.editUser.name,
        email: this.editUser.email,
        password: this.editUser.newPassword || currentUser.data.password,
      };

      // Update the user data
      const res = await axios.put(`http://localhost:3000/users/${this.userInfo.id}`, updatedData);

      if (res.status === 200) {
        // Update userInfo in localStorage
        this.userInfo = res.data;
        localStorage.setItem("user-info", JSON.stringify(this.userInfo));
        this.isEditing = false;
      }
    } catch (e) {
      alert(`Error: ${e.response ? e.response.data.message : e.message}`);
    }
  },
      Edit() {
        this.isEditing = !this.isEditing;
        if (this.isEditing) {
          this.editUser.name = this.userInfo.name;
          this.editUser.email = this.userInfo.email;
        }
      },
      Cancel() {
        this.isEditing = false;
      },
      logout() {
        localStorage.removeItem("user-info"); // Remove user info from localStorage
        this.$router.push({ name: "Home" }); // Redirect to login page
      },
    },
  };
  </script>
  
<style scoped>
.profile{
  width: 200px; 
  height: 200px; 
  border-radius: 50%; 
  border: 1px solid gray;
}
.upload {
  width: 120px;
  height: 45px;
  margin: 8px 14px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  line-height: 45px;
}

.upload:hover {
  background-color: #0056b3;
}

.conC{
  display: flex;
  justify-content: space-between;
  width: 710px;
  align-items: end;
}
.inputClass1 {
  border: 0.5px solid gray;
  border-radius: 10px;
  width: 310px;
  height: 50px;
}
.inputClass1::placeholder, 
.inputClass2::placeholder {
  font-size: 14px;
}
.inputClass2 {
  border: 0.5px solid gray;
  border-radius: 10px;
  width: 690px;
  height: 50px;
}
.frame {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.header {
  font-size: 56px;
}
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 790px;
  padding-top: 40px;
  background-color: white;
}
.nameBox {
  display: flex;
  justify-content: space-between;
  width: 710px;
  padding-bottom: 24px;
}
.emailBox {
  display: flex;
  justify-content: space-between;
  width: 710px;
  padding-bottom: 24px;
  align-items: end;
}
.password {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 710px;
}
.changePass p {
  padding-bottom: 5px;
}
.confirm {
  display: flex;
  align-self: end;
  padding-right: 35px;
  padding-top: 24px;
  gap: 32px;
}
.save {
  font-size: 16px;
  padding: 0px;
  border: none;
  background: none;
}
.saveChange {
  font-size: 16px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  padding: 16px 48px;
}
.inputClass {
  border: 0.5px solid gray;
  border-radius: 10px;
  width: 310px;
  height: 50px;
}
.inputClass::placeholder{
  font-size: 14px;
}
.text{
  height:53px; width: 310px; border: 1px solid gray; border-radius: 10px; display: flex; align-items: center; justify-content: center;}

.header{
  font-size: 28px;
}

.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px;
  width: 790px;
  background-color: white;
}

.nameBox {
  display: flex;
  justify-content: space-between;
  width: 710px;
  padding-bottom: 10px;
}

.emailBox {
    display: flex;
    justify-content: space-between;
    width: 710px;
}
.button{
    display: flex;
    align-self: end;
    padding-right: 35px;
    padding-top: 30px;
    gap: 32px;
}
.edit{
    font-size: 16px;
    padding: 0px;
    border: none;
    background: none;

}
.logOut{
    font-size: 16px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
    padding: 16px 48px;
}

</style>