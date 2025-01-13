<template>

    <Header />
    <div class="container">

        <h1>Contact Us</h1>
        <div class="box">
            <div class="info">

                <div class="info-card">
                    <p><Strong>Email:</Strong> support@[yourdomain].com (for customer support).</p>
                    <p><strong>Phone Number:</strong> +1-234-567-890 (for urgent inquiries or technical support).</p>
                    <p><strong>Live Chat:</strong> Provide a link to your live chat feature if available.</p>
                </div>

            </div>

            <div class="mail">

                <div class="form">
                    <h2>Send us a message</h2>
                    <form>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>

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

.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
    padding: 10px 30px;
    background-color: white;
}

.info {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 40%;
    padding: 10px 30px;
    background-color: white;
}

.mail {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 30%;
    padding: 10px 30px;
    background-color: white;
}
</style>