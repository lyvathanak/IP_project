<template>

    <Header />
    <div class="container">

        <div class="title">
            <h1>Privacy Policy</h1>
        </div>

        <div class="text">

            <h2>Data Collection:</h2>
            <h3>We collect your personal data to process orders and improve our services. This includes your name, email address, phone number, and payment details.</h3>

            <h2>Data Usage:</h2>
            <h3>Your data is used strictly for order fulfillment, customer support, and promotional purposes (if you opt-in).</h3>

            <h2>Cookies:</h2>
            <h3>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences in your browser settings.</h3>

            <h2>Third-Party Sharing:</h2>
            <h3>We do not sell or share your personal information with third parties, except for payment processing and shipping purposes.</h3>

            <h2>Customer Rights:</h2>
            <h3>You have the right to request access, correction, or deletion of your personal data.</h3>

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
    justify-content: center;
    flex-direction: column;
    /* max-width: 800px; */
    margin: 0 auto;
    /* padding: 20px; */
    background-color: gray;
}

</style>