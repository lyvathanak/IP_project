<template>
    <div class="promotion">
      <div
        class="promotion-item"
        v-for="(item, index) in promotionItems"
        :key="index"
        :style="{ backgroundColor: item.color }"
      >
        <div class="promotion-content">
          <div class="promotion-text">
            <h2>Categories</h2>
            <h1>{{ item.text }}</h1>
            <div class="countdown">
              <span class="countdown-circle">
                <span class="countdown-number">{{ days }}</span>
                <span class="countdown-text">Days</span>
              </span>
              <span class="countdown-circle">
                <span class="countdown-number">{{ hours }}</span>
                <span class="countdown-text">Hours</span>
              </span>
              <span class="countdown-circle">
                <span class="countdown-number">{{ minutes }}</span>
                <span class="countdown-text">Minutes</span>
              </span>
              <span class="countdown-circle">
                <span class="countdown-number">{{ seconds }}</span>
                <span class="countdown-text">Seconds</span>
              </span>
            </div>
            <Button label="Buy Now!" @click="handleButtonClick" class="btn-buy-now"/>
          </div>
          <img :src="item.image" alt="Promotion Image">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Button from "@/components/Button.vue";
  import image from '@/assets/Laptop/game.png'
  export default {
    name: "PromotionComponent",
    components: {
      Button,
    },
    data() {
      return {
        promotionItems: [
          { image: image, text: "New Controller", color: "#fdfdfd" },
          { image: image, text: "New Controller", color: "#fdfdfd" },
          { image: image, text: "New Controller", color: "#fdfdfd" },
        ],
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        countdownInterval: null,
      };
    },
    methods: {
      handleButtonClick() {
        alert("Button clicked!");
      },
      startCountdown() {
        const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now
        this.countdownInterval = setInterval(() => {
          const now = new Date().getTime();
          const distance = targetDate - now;
  
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          if (distance < 0) {
            clearInterval(this.countdownInterval);
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
          }
        }, 1000);
      },
    },
    mounted() {
      this.startCountdown();
    },
    beforeDestroy() {
      clearInterval(this.countdownInterval);
    },
  };
  </script>
  
  <style scoped>
  .btn-buy-now{
   padding: 10px 24px;
   color: white;
   background-color: #000;
  }
  .promotion {
   display: flex;
   flex-direction: column;
   align-items: center;
  }
  .promotion-item {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
    width: 1276px;
    margin-bottom: 20px;
    height: 562px;
    box-shadow: 0px -8px 5px rgba(0, 0, 0, 0.1), 0px 8px 5px rgba(0, 0, 0, 0.1);
    color: black;
    border: 2px solid #d9d5d5;
  }
  .promotion-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .promotion-text {
    text-align: left;
    margin-right: 90px;
  }
  .promotion-text h1 {
    margin-bottom: 10px;
    font-size: 60px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .promotion-text h2 {
    margin-bottom: 10px;
    font-size: 30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .countdown {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }
  .countdown-circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #000;
    text-align: center;
  }
  .countdown-number {
    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .countdown-text {
    font-size: 11px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .promotion-content img {
    width: 638px;
    height: 474px;
    margin-right: -20px;
  }
  </style>