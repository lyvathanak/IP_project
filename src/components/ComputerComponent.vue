<template>
  <div class="body">
    <div class="container">
      <div class="card" v-for="(laptop, index) in laptops" :key="index">
        <img :src="laptop.image" :alt="laptop.name">
        <div class="info">
          <h1>{{ laptop.name }}</h1>
          <p><strong>Model:</strong> {{ laptop.model }}</p>
          <p><strong>Storage:</strong> {{ laptop.storage }}</p>
          <p><strong>Memory (RAM):</strong> {{ laptop.memory }}</p>
          <p><strong>Graphics:</strong> {{ laptop.graphics }}</p>
          <p><strong>Processor:</strong> {{ laptop.processor }}</p>
          <p class="price">${{ laptop.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      laptops: [
        {
          image: "./src/assets/Laptop/Alienwarem18R2GamingLaptop.png",
          name: "Alienware m18 R2 Gaming Laptop",
          model: "5550",
          storage: "Up to 1 TB",
          memory: "Up to 32 GB",
          graphics: "Up to Intel® Integrated Graphics",
          processor: "Up to Intel® Core™ Ultra 7 165H",
          price: 1888,
        },
        {
          image: "./src/assets/Laptop/MacBookPro16(2024).png",
          name: 'MacBook Pro 16" (2024)',
          model: "A3001",
          storage: "Up to 2 TB",
          memory: "Up to 64 GB",
          graphics: "Up to Apple M3 Max GPU",
          processor: "Apple M3 Max Chip",
          price: 3499,
        },
        {
          image: "./src/assets/Laptop/LenovoThinkPadX1CarbonGen11.png",
          name: "Lenovo ThinkPad X1 Carbon Gen 11",
          model: "X1C11",
          storage: "Up to 2 TB SSD",
          memory: "Up to 32 GB LPDDR5",
          graphics: "Integrated Intel® Iris® Xe Graphics",
          processor: "Intel® Core™ i7-1370P",
          price: 2499,
        },
        {
          image: "./src/assets/Laptop/HPOmen17.png",
          name: "HP Omen 17",
          model: "Omen17-ck2000",
          storage: "Up to 1 TB SSD",
          memory: "Up to 32 GB DDR5",
          graphics: "NVIDIA® GeForce RTX™ 4080",
          processor: "Intel® Core™ i9-13900HX",
          price: 2699,
        },
        
      ],
    };
  },
};
</script>


<style scoped>

.body {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;


  
  padding: 20px;
  width: 100%;
  max-width: 1440px;
  gap: 25px 25px;
}

.card {
  width: 298px;
  border: 1px solid black;
  height: 294px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

img {
  width: 159px;
  height: 122.36px;
  object-fit: contain;
}

h1 {
  font-size: 16px;
  width: 260px;
  margin: 0px;
}

p {
  font-size: 12px;
  color: rgb(77, 77, 77);
  margin: 0px;
}

.info p strong {
  font-size: 12px;
  color: rgb(89, 89, 89);
  margin: 0px;
}
</style>