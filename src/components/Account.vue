<template>

    <div class="frame">

        <div class="container">

            <div class="header">
                <h1>Account</h1>
            </div>

            <div class="box">

                <div class="nameBox">

                    <div class="firstName">
                        <p>First Name</p>
                        <input type="text" placeholder="First Name" required class="inputClass" />

                    </div>

                    <div class="lastName">
                        <p>Last Name</p>
                        <input type="text" placeholder="Last Name" required class="inputClass" />
                    </div>

                </div>

                <div class="emailBox">

                    <div class="email">
                        <p>Email</p>
                        <input type="email" placeholder="example@gmail.com" required class="inputClass" />
                    </div>

                    <div class="address">
                        <p>Address</p>
                        <input type="address" placeholder="123 Main St" required class="inputClass" />
                    </div>

                </div>

                <div class="button">
                    <button class="edit">Edit</button>
                    <button class="logOut">Logout</button>

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

.inputClass {
    border: 0.5px solid gray;
    border-radius: 10px;
    width: 310px;
    height: 50px;
}
.inputClass::placeholder{
    font-size: 14px;
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