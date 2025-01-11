<template>
    <div class="frame">
      <div class="container">
        <div class="header">
          <h1>Account</h1>
        </div>
  
        <div v-if="!isEditing" class="box">
          <div class="nameBox">
            <div class="address">
              <p>Full Name</p>
              <p class="text">{{ user.name }}</p>
            </div>
          </div>
  
          <div class="emailBox">
            <div class="address">
              <p>Email</p>
              <p class="text">{{ user.email }}</p>
            </div>
  
            <RouterLink to="/" class="address">
              <p>Invoices</p>
              <p class="text">Your purchase</p>
            </RouterLink>
          </div>
  
          <div class="button">
            <button class="edit" @click="toggleEdit">Edit</button>
            <button class="logOut" @click="logout">Logout</button>
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
  
          <div class="confirm">
            <button class="save" @click="cancelEdit">Cancel</button>
            <button class="saveChange" @click="saveChanges">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isEditing: false,
        userInfo: JSON.parse(localStorage.getItem("user-info")),
        editUser: {
          name: '',
          email: '',
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        },
      };
    },
    methods: {
      toggleEdit() {
        this.isEditing = !this.isEditing;
        if (this.isEditing) {
          this.editUser = { ...this.user };
        }
      },
      cancelEdit() {
        this.isEditing = false;
      },
      saveChanges() {
        // Handle saving changes logic here
        this.user = { ...this.editUser };
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
}
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #F2F2F2;
    padding-bottom: 30.5px;
    width: 1210px;
    margin: 0px 56px;
}
.header {
    font-size: 56px;
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
.frame {
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #F2F2F2;
    padding-bottom: 30.5px;
    width: 1210px;
    margin: 0px 56px;
}

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