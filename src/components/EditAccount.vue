<template>
    <div class="frame">

        <div class="container">

            <h1 class="header"> Edit account</h1>

            <div class="box">

                <div class="nameBox">

                    <div class="firstName">
                        <p>First Name</p>
                        <input type="text" placeholder="First Name" required class="inputClass1" />

                    </div>

                    <div class="lastName">
                        <p>Last Name</p>
                        <input type="text" placeholder="Last Name" required class="inputClass1" />
                    </div>

                </div>

                <div class="emailBox">

                    <div class="email">
                        <p>Email</p>
                        <input type="email" placeholder="example@gmail.com" required class="inputClass1" />
                    </div>

                    <div class="address">
                        <p>Address</p>
                        <input type="address" placeholder="123 Main St" required class="inputClass1" />
                    </div>
                </div>

                <div class="password">
                    <div class="changePass">
                        <p>Password Changes</p>

                        <input type="password" placeholder="Current Password" required class="inputClass2" />
                    </div>
                    <input type="password" placeholder="New Password" required class="inputClass2" />

                    <input type="password" placeholder="Confirm Password" required class="inputClass2" />

                </div>

                <div class="confirm">
                    <button class="save"> Cancel </button>
                    <button class="saveChange">Save Changes</button> 
                </div>



            </div>
            

        </div>
    </div>
</template>

<script>

import input from './inputTest.vue';

export default {

    components: {
        input,
    }

}
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
}

.password {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 710px;
}
.changePass p{
    padding-bottom: 5px;
}
.confirm{
    display: flex;
    align-self: end;
    padding-right: 35px;
    padding-top: 24px;
    gap: 32px;
}
.save{
    font-size: 16px;
    padding: 0px;
    border: none;
    background: none;
}.saveChange{
    font-size: 16px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
    padding: 16px 48px;
}

</style>