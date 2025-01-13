<template>
    <div class="footer">
        <!-- Top Section -->
        <div class="footer-top">
            <!-- Logo Section -->
            <div class="logo">
                <h1>GOODeal</h1>
            </div>

            <!-- Info Container -->
            <div class="info-container">
                <!-- Contact Information -->
                <div class="info">
                    <div class="location">
                        <p>
                            <Icon icon="material-symbols:location-on" width="24" height="24" color="#007BFF" />
                            Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                        </p>
                    </div>
                    <div class="contact">
                        <p>
                            <Icon icon="material-symbols:phone-enabled" width="24" height="24" color="#007BFF"
                                class="invert-icon" />
                            (123) 456-7890
                        </p>

                        <p>
                            <Icon icon="material-symbols:print-rounded" width="24" height="24" color="#007BFF" />
                            (123) 456-7890
                        </p>
                    </div>
                </div>

                <!-- Social Media Links -->
                <div class="social">
                    <p style="color: gray;">Social Media</p>
                    <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <Icon icon="uil:facebook" width="24" height="24" />
                    </a>
                    <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <Icon icon="uil:twitter" width="24" height="24" />
                    </a>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <Icon icon="uil:linkedin" width="24" height="24" />
                    </a>
                    <a href="https://www.instagram.com" aria-label="Instagram" target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="il:instagram" width="24" height="24" />
                    </a>

                    <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                        <Icon icon="il:youtube" width="24" height="24" />
                    </a>
                    <a href="https://www.google.com" aria-label="Google" target="_blank" rel="noopener noreferrer">
                        <Icon icon="uil:google" width="24" height="24" />
                    </a>
                    <a href="https://www.pinterest.com" aria-label="Pinterest" target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="mdi:pinterest" width="24" height="24" />
                    </a>
                    <a href="https://www.rss.com" aria-label="RSS" target="_blank" rel="noopener noreferrer">
                        <Icon icon="uil:rss" width="24" height="24" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="footer-bottom">
            <nav>
                <RouterLink to="/about-us" aria-label="About Us">About Us</RouterLink>
                <RouterLink to="/contact-us" aria-label="Contact Us">Contact Us</RouterLink>
                <RouterLink to="/help" aria-label="Help">Help</RouterLink>
                <RouterLink to="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</RouterLink>
                <RouterLink to="/disclaimer" aria-label="Disclaimer">Disclaimer</RouterLink>
            </nav>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ADLaM+Display&family=Assistant:wght@200..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Quicksand:wght@300..700&display=swap');

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding:0px  140px ;
    box-sizing: border-box;
    border-bottom: 1px solid gray;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26.063rem;
    height: 13.688rem;
}

.logo h1 {
    font-family: "ADLaM Display", serif;
    font-size: 6rem;
    font-weight: bold;
    color: #000;
}

.info-container {
    width: 28.75rem;
    height: 13.688rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: "Assistant", sans-serif;
    font-weight: 0.875rem;
}

.info {
    display: flex;
    flex-direction: column;
    padding-top: 2.25rem;
}

.location {
    display: flex;
    align-items: center;
    justify-content: end;
}

.location p {
    display: flex;
    gap: 1rem;
    margin-right: 0.6rem;
}

.contact {
    display: flex;
    justify-content: end;
    gap: 6.8rem;
}

.contact p {
    display: flex;
    gap: 1rem;
}

.invert-icon {
    transform: scaleX(-1)
}

.social {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.social a {
    font-size: 1.5em;
    text-decoration: none;
    color: #007bff;
}

.footer-bottom {
    
    margin-bottom: 30px;
    
}

.footer-bottom nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 72.5rem;
    height: 1.125rem;
    padding-top: 2.5rem;
    /* margin: 0 3.125rem; */
    gap: 3.125rem;
}

.footer-bottom nav a {
    font-family: "Assistant", sans-serif;
    font-size: 0.875rem;
    text-decoration: none;
    color: black;
    font-size: 0.9em;
}

.footer-bottom nav a:hover {
    text-decoration: underline;
}
</style>
