<template>
    <div class="body">
      <div class="container">
        <!-- Show loading message while fetching products -->
        <div v-if="loading" class="loading">Loading products...</div>
        
        <!-- Show error message if fetching failed -->
        <div v-if="error" class="error">{{ error }}</div>
  
        <!-- Show products based on the current path -->
        <RouterLink
          :to="`/product-details/${product.id}`"
          class="card"
          v-for="(product, index) in displayProducts()"
          :key="index"
        >
          <img :src="getImagePath(product.image)" :alt="product.name" />
          <div class="info">
            <h1>{{ product.name }}</h1>
            <template v-if="product.model">
              <p><strong>Model:</strong> {{ product.model }}</p>
              <p><strong>Storage:</strong> {{ product.storage }} TB</p>
              <p><strong>Memory (RAM):</strong> {{ product.ram }} GB</p>
              <p><strong>Graphics:</strong> {{ product.graphics }}</p>
              <p><strong>Processor:</strong> {{ product.processor }}</p>
            </template>
  
             <template v-else-if="product.group==='cpu'">
              <p><strong>CPU</strong> {{ product.productCod }}</p>
              <p>{{ product.brand }}</p>
            </template>
  
            <template v-else>
              <p><strong>Product Code:</strong> {{ product.productCod }}</p>
            </template>
  
            <p class="price">${{ product.price }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        laptops: [],
        motherboards: [],
        monitor: [],
        speaker: [],
        controller: [],
        powerSupplyUnit: [],
        mouse: [],
        keyboard: [],
        usb: [],
        microphone: [],
        coolingFans: [],
        bluetoothAdapter: [],
        msi: [],
        asus: [],
        apple: [],
        hp: [],
        lenovo: [],
        acer: [],
        hdd: [],
        ssd: [],
        nvmeDrives: [],
        externalHardDrivers: [],
        memoryCards: [],
        usbFlashDrivers: [],
        cloudStorage: [],
        raidSystems: [],
        nas: [],
        accessories: [],
        laptopsBags: [],
        gamingHeadsets: [],
        externalDvdDrivers: [],
        dockingStations: [],
        externalKeyboard: [],
        mousePads: [],
        cableOrganizer: [],
        powerBank: [],
        screenProtector: [],
        webcams: [],
        usbHubs: [],
        adaptersAndConverters: [],
        cpu: [],
        loading: true,
        error: null,
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const [
            
          ] = await Promise.all([
            axios.get("http://localhost:3000/motherboards"),
            axios.get("http://localhost:3000/laptops"),
            axios.get("http://localhost:3000/cpu"),
            axios.get("http://localhost:3000/monitor"),
            axios.get("http://localhost:3000/speaker"),
            axios.get("http://localhost:3000/controller"),
            axios.get("http://localhost:3000/power-supply-unit"),
            axios.get("http://localhost:3000/mouse"),
            axios.get("http://localhost:3000/keyboard"),
            axios.get("http://localhost:3000/usb"),
            axios.get("http://localhost:3000/microphone"),
            axios.get("http://localhost:3000/cooling-fans"),
            axios.get("http://localhost:3000/bluetooth-adapter"),
            axios.get("http://localhost:3000/msi"),
            axios.get("http://localhost:3000/asus"),
            axios.get("http://localhost:3000/apple"),
            axios.get("http://localhost:3000/hp"),
            axios.get("http://localhost:3000/lenovo"),
            axios.get("http://localhost:3000/acer"),
            axios.get("http://localhost:3000/hdd"),
            axios.get("http://localhost:3000/ssd"),
            axios.get("http://localhost:3000/nvme-drives"),
            axios.get("http://localhost:3000/external-hard-drivers"),
            axios.get("http://localhost:3000/memory-cards"),
            axios.get("http://localhost:3000/usb-flash-drivers"),
            axios.get("http://localhost:3000/cloud-storage"),
            axios.get("http://localhost:3000/raid-systems"),
            axios.get("http://localhost:3000/nas"),
            axios.get("http://localhost:3000/accessories"),
            axios.get("http://localhost:3000/laptops-bags"),
            axios.get("http://localhost:3000/gaming-headsets"),
            axios.get("http://localhost:3000/external-dvd-drivers"),
            axios.get("http://localhost:3000/docking-stations"),
            axios.get("http://localhost:3000/external-keyboard"),
            axios.get("http://localhost:3000/mouse-pads"),
            axios.get("http://localhost:3000/cable-organizer"),
            axios.get("http://localhost:3000/power-bank"),
            axios.get("http://localhost:3000/screen-protector"),
            axios.get("http://localhost:3000/webcams"),
            axios.get("http://localhost:3000/usb-hubs"),
            axios.get("http://localhost:3000/adapters-and-converters"),
          ]);
          
        } catch (error) {
          this.error = "Failed to fetch products";
        } finally {
          this.loading = false;
        }
      },
      getImagePath(filename) {
        return filename;
      },
      displayProducts() {
       const path=this.$route.path;
        
      
          return [
            ...this.laptops.slice(0, 4),
            ...this.motherboards.slice(0, 4),
            ...this.cpu.slice(0, 4),
            ...this.monitor.slice(0, 4),
            ...this.speaker.slice(0, 4),
            ...this.controller.slice(0, 4),
            ...this.powerSupplyUnit.slice(0, 4),
            ...this.mouse.slice(0, 4),
            ...this.keyboard.slice(0, 4),
            ...this.usb.slice(0, 4),
            ...this.microphone.slice(0, 4),
            ...this.coolingFans.slice(0, 4),
            ...this.bluetoothAdapter.slice(0, 4),
            ...this.msi.slice(0, 4),
            ...this.asus.slice(0, 4),
            ...this.apple.slice(0, 4),
            ...this.hp.slice(0, 4),
            ...this.lenovo.slice(0, 4),
            ...this.acer.slice(0, 4),
            ...this.hdd.slice(0, 4),
            ...this.ssd.slice(0, 4),
            ...this.nvmeDrives.slice(0, 4),
            ...this.externalHardDrivers.slice(0, 4),
            ...this.memoryCards.slice(0, 4),
            ...this.usbFlashDrivers.slice(0, 4),
            ...this.cloudStorage.slice(0, 4),
            ...this.raidSystems.slice(0, 4),
            ...this.nas.slice(0, 4),
            ...this.accessories.slice(0, 4),
            ...this.laptopsBags.slice(0, 4),
            ...this.gamingHeadsets.slice(0, 4),
            ...this.externalDvdDrivers.slice(0, 4),
            ...this.dockingStations.slice(0, 4),
            ...this.externalKeyboard.slice(0, 4),
            ...this.mousePads.slice(0, 4),
            ...this.cableOrganizer.slice(0, 4),
            ...this.powerBank.slice(0, 4),
            ...this.screenProtector.slice(0, 4),
            ...this.webcams.slice(0, 4),
            ...this.usbHubs.slice(0, 4),
            ...this.adaptersAndConverters.slice(0, 4)
          ];
      },
    },
    mounted() {
      this.fetchProducts();
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
    text-decoration: none;
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