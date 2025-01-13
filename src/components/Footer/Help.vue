<template>

    <Header /> 
    <div class="container">

        <div class="top">
            <h1>Help Center</h1>
            <input type="text" placeholder="🔎Search..." class="search-bar" />
        </div>

        <div class="bottom">
            <h1>Need help? We've got your back.</h1>
            <h3>Need assistance? Visit our Help Center for answers to frequently asked questions about ordering, payments, shipping, and returns. We also offer step-by-step guides for assembling computers, choosing the right components, and troubleshooting hardware issues. If you need further support, contact our customer service team via email, phone, or live chat—we’re here to help!</h3>

        </div>

    </div>
    <Footer />

</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';

export default {
    components: {
        Header,
        Footer
    }
}

</script>

<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    gap: 20px;
    background-color: rgb(150, 150, 150);
}
.top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    padding: 10px 30px;
    /* background-color: white; */
}
.bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    padding: 10px 30px;
    background-color: white;
}
.bottom h3{
    width: 1000px;
}

</style>