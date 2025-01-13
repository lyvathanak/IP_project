<template>

    <Header />
    <div class="container">
        
        <div class="title"> 
            <h1>Disclaimer</h1>
        </div>

        <div class="text">

            <h2>Warranty & Liability:</h2>
            <li>Products sold on our website come with manufacturer warranties unless stated otherwise.</li>
            <li>We are not liable for misuse or improper installation of components.</li>

            <h2>Availability:</h2> 
            <li>Product availability and prices are subject to change without notice.</li>

            <h2>Third-Party Content:</h2> 
            <li>We are not responsible for the accuracy of third-party software or content linked on our website.</li>

            <h2>Errors:</h2> 
            <li>While we strive for accuracy, typographical errors and pricing inaccuracies may occur. We reserve the right to correct these issues.</li>

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
}


</style>