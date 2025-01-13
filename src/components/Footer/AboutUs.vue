<template>

    <Header />
    <div class="container">

        <h1>Our Group Member:</h1>

        <div class="profile">
            
            <div class="profile-card">
                <img src="/src/assets/photo.jpg" alt="">
                <h2>Sean Reaksmey (Leader)</h2>
                <h3>e20210686</h3>
            </div>
            <div class="profile-card">
                <img src="/src/assets/photo.jpg" alt="">
                <h2>Seang Chanvibaksanna</h2>
                <h3>e20211168</h3>
            </div>
            <div class="profile-card">
                <img src="/src/assets/photo.jpg" alt="">
                <h2>Ngov Ly Vathanak</h2>
                <h3>e20211284</h3>
            </div>
            <div class="profile-card">
                <img src="/src/assets/photo.jpg" alt="">
                <h2>Roem Vanne</h2>
                <h3>e20211579</h3>
            </div>
            <div class="profile-card">
                <img src="/src/assets/photo.jpg" alt="">
                <h2>Samnang Sreyneang</h2>
                <h3>e20210319</h3>
            </div>
            
        </div>

        <div class="info">

            <div class="info-card">
                <h1>Who are we:</h1>
                <h2>Welcome to GOODeal, your one-stop destination for high-quality computers, components, and accessories. We aim to empower our customers with the best tools for their personal and professional tech needs.</h2>
            </div>
            
            <div class="info-card">
                <h1>Our Mission:</h1>
                <h2>Our mission is to deliver reliable and cutting-edge technology at competitive prices, backed by exceptional customer service.</h2>
            </div>
            
            <div class="info-card">
                <h1>Our Vision:</h1>
                <h2>We are committed to providing excellent customer service and support to all of our customers.</h2>
            </div>

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
    .profile {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 90%;
        padding: 10px 30px;
        background-color: white;
    }
    .profile-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        padding: 10px;
        word-wrap: break-word;
    }
    .info {
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 90%;
        padding: 10px 30px;
        background-color: white;
    }.info h1{
        text-decoration: underline;
        text-shadow: 20px 20px 20px black;
    }.info h2{
        color: rgb(11, 11, 11);
    }

    .info-card {
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 10px;
        word-wrap: break-word;
    }

    h1,h2,h3, p{
        padding: 0px;
        margin: 0px;
    }


</style>