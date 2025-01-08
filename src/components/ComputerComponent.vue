<template>
  <div class="body">
    <div class="container">
      <!-- Show loading message while fetching products -->
      <div v-if="loading" class="loading">Loading products...</div>
      
      <!-- Show error message if fetching failed -->
      <div v-if="error" class="error">{{ error }}</div>
       <!-- Show "No data" message if there are no products to display -->
       
        <div  v-else-if="!displayProducts().length" class="no-data">
        <div class="announcement-card">
          <h1 class="announcement-title">Product Unavailable</h1>
          <p class="announcement-message">We’re sorry! The product you're looking for is not available at the moment.</p>
          <p class="announcement-suggestion">Please check back later or explore our other categories for more exciting options.</p>
          <RouterLink to="/" class="back-button">Go Back to Home</RouterLink>
        </div>
         </div>
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
          motherboardsResponse,
          laptopsResponse,
          cpuResponse,
          monitorResponse,
          speakerResponse,
          controllerResponse,
          powerSupplyUnitResponse,
          mouseResponse,
          keyboardResponse,
          usbResponse,
          microphoneResponse,
          coolingFansResponse,
          bluetoothAdapterResponse,
          msiResponse,
          asusResponse,
          appleResponse,
          hpResponse,
          lenovoResponse,
          acerResponse,
          hddResponse,
          ssdResponse,
          nvmeDrivesResponse,
          externalHardDriversResponse,
          memoryCardsResponse,
          usbFlashDriversResponse,
          cloudStorageResponse,
          raidSystemsResponse,
          nasResponse,
          accessoriesResponse,
          laptopsBagsResponse,
          gamingHeadsetsResponse,
          externalDvdDriversResponse,
          dockingStationsResponse,
          externalKeyboardResponse,
          mousePadsResponse,
          cableOrganizerResponse,
          powerBankResponse,
          screenProtectorResponse,
          webcamsResponse,
          usbHubsResponse,
          adaptersAndConvertersResponse,
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
          axios.get("http://localhost:3000/laptops-bages"),
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
        this.motherboards = motherboardsResponse.data;
        this.laptops = laptopsResponse.data;
        this.cpu = cpuResponse.data;
        this.monitor = monitorResponse.data;
        this.speaker = speakerResponse.data;
        this.controller = controllerResponse.data;
        this.powerSupplyUnit = powerSupplyUnitResponse.data;
        this.mouse = mouseResponse.data;
        this.keyboard = keyboardResponse.data;
        this.usb = usbResponse.data;
        this.microphone = microphoneResponse.data;
        this.coolingFans = coolingFansResponse.data;
        this.bluetoothAdapter = bluetoothAdapterResponse.data;
        this.msi = msiResponse.data;
        this.asus = asusResponse.data;
        this.apple = appleResponse.data;
        this.hp = hpResponse.data;
        this.lenovo = lenovoResponse.data;
        this.acer = acerResponse.data;
        this.hdd = hddResponse.data;
        this.ssd = ssdResponse.data;
        this.nvmeDrives = nvmeDrivesResponse.data;
        this.externalHardDrivers = externalHardDriversResponse.data;
        this.memoryCards = memoryCardsResponse.data;
        this.usbFlashDrivers = usbFlashDriversResponse.data;
        this.cloudStorage = cloudStorageResponse.data;
        this.raidSystems = raidSystemsResponse.data;
        this.nas = nasResponse.data;
        this.accessories = accessoriesResponse.data;
        this.laptopsBags = laptopsBagsResponse.data;
        this.gamingHeadsets = gamingHeadsetsResponse.data;
        this.externalDvdDrivers = externalDvdDriversResponse.data;
        this.dockingStations = dockingStationsResponse.data;
        this.externalKeyboard = externalKeyboardResponse.data;
        this.mousePads = mousePadsResponse.data;
        this.cableOrganizer = cableOrganizerResponse.data;
        this.powerBank = powerBankResponse.data;
        this.screenProtector = screenProtectorResponse.data;
        this.webcams = webcamsResponse.data;
        this.usbHubs = usbHubsResponse.data;
        this.adaptersAndConverters = adaptersAndConvertersResponse.data;
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
      const path = this.$route.path;
      if (path === "/products/all-laptops") {
        console.log(this.laptops);
        return this.laptops;
      } else if (path === "/products/mother-board") {
        return this.motherboards;
      } else if (path === "/products/cpu") {
        return this.cpu;
      } else if (path === "/products/monitor") {
        return this.monitor;
      } else if (path === "/products/speaker") {
        return this.speaker;
      } else if (path === "/products/controller") {
        return this.controller;
      } else if (path === "/products/power-supply-unit") {
        return this.powerSupplyUnit;
      } else if (path === "/products/mouse") {
        return this.mouse;
      } else if (path === "/products/keyboard") {
        return this.keyboard;
      } else if (path === "/products/usb") {
        return this.usb;
      } else if (path === "/products/microphone") {
        return this.microphone;
      } else if (path === "/products/cooling-fans") {
        return this.coolingFans;
      } else if (path === "/products/bluetooth-adapter") {
        return this.bluetoothAdapter;
      } else if (path === "/products/msi") {
        return this.msi;
      } else if (path === "/products/asus") {
        return this.asus;
      } else if (path === "/products/apple") {
        return this.apple;
      } else if (path === "/products/hp") {
        return this.hp;
      } else if (path === "/products/lenovo") {
        return this.lenovo;
      } else if (path === "/products/acer") {
        return this.acer;
      } else if (path === "/products/hdd") {
        return this.hdd;
      } else if (path === "/products/ssd") {
        return this.ssd;
      } else if (path === "/products/nvme-drives") {
        return this.nvmeDrives;
      } else if (path === "/products/external-hard-drivers") {
        return this.externalHardDrivers;
      } else if (path === "/products/memory-cards") {
        return this.memoryCards;
      } else if (path === "/products/usb-flash-drivers") {
        return this.usbFlashDrivers;
      } else if (path === "/products/cloud-storage") {
        return this.cloudStorage;
      } else if (path === "/products/raid-systems") {
        return this.raidSystems;
      } else if (path === "/products/nas") {
        return this.nas;
      } else if (path === "/products/all-components" ||path=== "/products") {
        const allProduct= [
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
          ...this.adaptersAndConverters.slice(0, 4),
        ];
        console.log(allProduct);
        return allProduct;
      }
      return [];
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
<style scoped>
.body{
  display: flex;
  justify-content: center;
}
.container{
  display:flex ;
  flex-wrap: wrap;
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
.no-data{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.announcement-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

/* Title styling */
.announcement-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

/* Message styling */
.announcement-message {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

/* Suggestion styling */
.announcement-suggestion {
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
}

/* Back button styling */
.back-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>