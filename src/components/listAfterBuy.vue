<template>
  <div class="cart">
    <table class="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-if="cart.length">
        <tr v-for="(item, index) in cart" :key="item.productId">
          <td class="product">
            <img :src="item.image" :alt="item.name" class="product-image" />
            <p class="name">{{ item.name }}</p>
          </td>
          <td>${{ item.price }}</td>
          <td>
            <div class="quantity-input">
              {{ item.quantity }}
            </div>
          </td>
          <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td class="edit-delete">
            <Button
              :label="'Delete'"
              @click="removeItem(index)"
              class="btn-delete"
            />
            <Button
              :label="'Edit'"
              @click="editItem(index)"
              class="btn-edit"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="btn-add">
    <Button :label="'Add Products'" class="btn-add-product" />
  </div>

  <div class="all">
    <form class="apply-coupon" @submit.prevent="applyCoupon">
      <input
        id="CouponCode"
        placeholder="Enter Coupon Code"
        v-model="couponCode"
        class="input-coupon"
      />
      <Button
        type="submit"
        :label="'Apply Coupon'"
        class="btn-apply-coupon"
      />
    </form>

    <div class="summary">
      <p class="text-cart">Cart Summary</p>
      <div class="cart-total">
        <div class="price">
          <p>Subtotal</p>
          <p>${{ cartSubtotal }}</p>
        </div>
        <div class="price">
          <p>Discount</p>
          <p v-if="discount">{{ discount + '%' }}</p>
        </div>
        <div class="price">
          <p>Shipping</p>
          <p>{{ shipping }}</p>
        </div>
        <div class="price">
          <p>Total</p>
          <p>${{ cartTotal }}</p>
        </div>
        <Button :label="'Proceed to Checkout'" class="btn-process" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "./Button.vue";


export default {
  components: {
    Button,
  },
  data() {
    return {
      cart: [],
      discount: 0,
      shipping: "Free",
      couponCodes: ["SAVE10", "SAVE20", "WELCOME5"],
      couponCode: "",
    }
  },
  methods: {
    applyCoupon() {
      const discounts = { SAVE10: 10, SAVE20: 20, WELCOME5: 5 };
      if (this.couponCodes.includes(this.couponCode)) {
        this.discount = discounts[this.couponCode];
        alert(`Coupon applied: ${this.discount}% off!`);
      } else {
        this.discount = 0;
        alert("Invalid coupon code.");
      }
    },
    removeItem(index) {
      // this.cart.splice(index, 1);
      const cartStore = useCartStore();
      cartStore.removeFromCart(index);
    },
    editItem(index) {
      alert(`Edit item at index ${index}`);
    },
  },
  async created() {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("user-info"));
      if (!loggedInUser) {
        throw new Error("No user is logged in. Please log in to view your cart.");
      }

      const userId = loggedInUser.id;
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      this.cart = response.data.userCart || [];
      const productIds = this.cart.map((item) => item.productId);
      const param= { params: { ids: productIds.join(",") } };
      if (productIds.length > 0) {
          const [
          laptopsRes,
          motherboardsRes,
          cpuRes,
          monitorRes,
          speakerRes,
          controllerRes,
          powerSupplyUnitRes,
          mouseRes,
          keyboardRes,
          usbRes,
          microphoneRes,
          coolingFansRes,
          bluetoothAdapterRes,
          msiRes,
          asusRes,
          appleRes,
          hpRes,
          lenovoRes,
          acerRes,
          hddRes,
          ssdRes,
          nvmeDrivesRes,
          externalHardDriversRes,
          memoryCardsRes,
          usbFlashDriversRes,
          cloudStorageRes,
          raidSystemsRes,
          nasRes,
          accessoriesRes,
          laptopsBagsRes,
          gamingHeadsetsRes,
          externalDvdDriversRes,
          dockingStationsRes,
          externalKeyboardRes,
          mousePadsRes,
          cableOrganizerRes,
          powerBankRes,
          screenProtectorRes,
          webcamsRes,
          usbHubsRes,
          adaptersAndConvertersRes
          ] = await Promise.all([
          axios.get(`http://localhost:5000/laptops`, param),
          axios.get(`http://localhost:5000/motherboards`, param),
          axios.get(`http://localhost:5000/cpu`, param),
          axios.get(`http://localhost:5000/monitor`, param),
          axios.get(`http://localhost:5000/speaker`, param),
          axios.get(`http://localhost:5000/controller`, param),
          axios.get(`http://localhost:5000/power-supply-unit`, param),
          axios.get(`http://localhost:5000/mouse`, param),
          axios.get(`http://localhost:5000/keyboard`, param),
          axios.get(`http://localhost:5000/usb`, param),
          axios.get(`http://localhost:5000/microphone`, param),
          axios.get(`http://localhost:5000/cooling-fans`, param),
          axios.get(`http://localhost:5000/bluetooth-adapter`, param),
          axios.get(`http://localhost:5000/msi`, param),
          axios.get(`http://localhost:5000/asus`, param),
          axios.get(`http://localhost:5000/apple`, param),
          axios.get(`http://localhost:5000/hp`, param),
          axios.get(`http://localhost:5000/lenovo`, param),
          axios.get(`http://localhost:5000/acer`, param),
          axios.get(`http://localhost:5000/hdd`, param),
          axios.get(`http://localhost:5000/ssd`, param),
          axios.get(`http://localhost:5000/nvme-drives`, param),
          axios.get(`http://localhost:5000/external-hard-drivers`, param),
          axios.get(`http://localhost:5000/memory-cards`, param),
          axios.get(`http://localhost:5000/usb-flash-drivers`, param),
          axios.get(`http://localhost:5000/cloud-storage`, param),
          axios.get(`http://localhost:5000/raid-systems`, param),
          axios.get(`http://localhost:5000/nas`, param),
          axios.get(`http://localhost:5000/accessories`, param),
          axios.get(`http://localhost:5000/laptops-bages`, param),
          axios.get(`http://localhost:5000/gaming-headsets`, param),
          axios.get(`http://localhost:5000/external-dvd-drivers`, param),
          axios.get(`http://localhost:5000/docking-stations`, param),
          axios.get(`http://localhost:5000/external-keyboard`, param),
          axios.get(`http://localhost:5000/mouse-pads`, param),
          axios.get(`http://localhost:5000/cable-organizer`, param),
          axios.get(`http://localhost:5000/power-bank`, param),
          axios.get(`http://localhost:5000/screen-protector`, param),
          axios.get(`http://localhost:5000/webcams`, param),
          axios.get(`http://localhost:5000/usb-hubs`, param),
          axios.get(`http://localhost:5000/adapters-and-converters`, param)
        ]);

        const allProducts = [
          ...laptopsRes.data,
          ...motherboardsRes.data,
          ...cpuRes.data, ...monitorRes.data,
          ...speakerRes.data, ...controllerRes.data,
          ...powerSupplyUnitRes.data, ...mouseRes.data,
          ...keyboardRes.data, ...usbRes.data,
          ...microphoneRes.data,
          ...coolingFansRes.data,
          ...bluetoothAdapterRes.data,
          ...msiRes.data,
          ...asusRes.data,
          ...appleRes.data,
          ...hpRes.data,
          ...lenovoRes.data,
          ...acerRes.data,
          ...hddRes.data,
          ...ssdRes.data,
          ...nvmeDrivesRes.data,
          ...externalHardDriversRes.data,
          ...memoryCardsRes.data,
          ...usbFlashDriversRes.data,
          ...cloudStorageRes.data,
          ...raidSystemsRes.data,
          ...nasRes.data,
          ...accessoriesRes.data,
          ...laptopsBagsRes.data,
          ...gamingHeadsetsRes.data,
          ...externalDvdDriversRes.data,
          ...dockingStationsRes.data,
          ...externalKeyboardRes.data,
          ...mousePadsRes.data,
          ...cableOrganizerRes.data,
          ...powerBankRes.data,
          ...screenProtectorRes.data,
          ...webcamsRes.data,
          ...usbHubsRes.data,
          ...adaptersAndConvertersRes.data
        ];

        this.cart = this.cart.map((item) => {
          const product = allProducts.find(
            (product) => product.id === item.productId
          );
          return {
            ...item,
            image: product?.image || "",
            price: product?.price || 0,
          };
        });
        };
      } catch (error) {
      console.error("Error fetching cart:", error);
    }
  },

  computed: {
    cartSubtotal() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    cartTotal() {
      return this.cartSubtotal - (this.cartSubtotal * this.discount) / 100;
    },
  },
}; 
</script>

  <style scoped>
 
  .text-Cart{
    font-weight: bold;
    font-size: 24px;
  }
  .all{
    display: flex;
    justify-content: space-between;
    padding:10px 210px;
    align-items: start;
    border-bottom: 1px solid black;
  }
  .btn-add{
    padding-top: 20px;
    padding-left: 210px;
  }
  .summary{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .cart-total{
    width: 330px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:12px;
  }
  .price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: #bfbfbf 1px solid
  }
.buy-items{
  display: flex;
  flex-direction: column;
  gap: 28px;
}
  .btn-apply-coupon,
  .btn-process{
    padding:14px 24px;
    border-radius: 1px;
    font-size: 16px;
  }
  .btn-process{
    width: 210px;
  }
  .apply-coupon{
    display: flex;
    align-items: center;
  }
  .btn-delete{
    padding:8px 20px;
    border-radius: 1px;
    font-size: 16px;
    margin-left: 12px;
  }
  .cart-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin-top: 20px;
  }
  .cart{
    display: flex;
    flex-direction: column;
    border-bottom: none;
    
  }
  .btn-add-product{
    padding:14px 24px;
    border-radius: 1px;
    font-size: 16px;
  }
  thead {
    font-weight: bold;
    background-color: #f7f7f7;
    height: 45px;
  }
  
  th, td {
    padding-left: 110px;
    padding-top: 10px;
    vertical-align: middle;
  }
  
    /* tr:not(:last-child) td {
    border-bottom: none;No lines
  }  */
  
  .product {
    display: flex;
    align-items: center;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  
  .quantity-input {
    width: 62px;
    height: 34px;
    text-align: center;
  }
  
  button {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 8px 24px;
    border-radius: 5px;
    cursor: pointer;
  }
  .name {
    width: 220px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  </style>
  