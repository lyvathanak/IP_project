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
        <tbody>
          <tr v-for="(item, index) in BuyItems" :key="index">
            <td class="product">
              <img :src="item.image" alt="Product Image" class="product-image" />
              <p>{{ item.text }}</p>
            </td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>
              <input
                type="number"
                v-model="item.quality"
                min="1"
                class="quantity-input"
              />
            </td>
            <td>${{ (item.price * item.quality).toFixed(2) }}</td>
            <td>
              <Button
                :label="'Delete'"
                @click="removeItem(index)"
                class="btn-delete"
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
    <div class="apply-coupon">
        <InputField
          id="CouponCode"
          :placeholder="'Enter Coupon Code'"
          v-model="couponCode"
          class="input-coupon"
        />
        <Button :label="'Apply Coupon'" @click="applyCoupon" class="btn-apply-coupon" />
      </div>
      
      <div class="summary">
        <p class="text-Cart">Cart Summary</p>
        <div class="cart-total">
            
       <div class="price"> 
        <p>Subtotal</p>
        <p>$1750</p>
      </div>
      <div class="price"> 
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div class="price"> 
        <p>Total</p>
        <p>$1750</p>
      </div>
      <Button :label="'Process to checkout'" class="btn-process"/>
      </div>
      </div>
   </div>
  
   
  </template>
  <script>
  import monitor from "@/assets/Laptop/game.png";
  import game from "@/assets/Laptop/game.png";
  import Button from "@/components/Button.vue";
  import InputField from "@/components/InputField.vue";
  import BuyItem from "@/components/BuyItem.vue";
  
  export default {
    components: {
      Button,
      InputField,
      BuyItem,
    },
    data() {
      return {
        couponCode: "",
        buyItems: [
          { label: "Subtotal", invoice: "ReceiptItem", price: 692.0 },
          { label: "Shipping", invoice: "ReceiptItem", price: "Free" },
          { label: "Total", invoice: "ReceiptItem", price: 692.0 },
        ],
        BuyItems: [
          { image: monitor, text: "Monitor", price: 466, quality: 2 },
          { image: game, text: "Controller", price: 226, quality: 2 },
        ],
      };
    },
    methods: {
      removeItem(index) {
        this.BuyItems.splice(index, 1);
        this.updateCartSummary();
      },
      applyCoupon() {
        if (this.couponCode === "DISCOUNT10") {
          this.buyItems[2].price *= 0.9; // Apply a 10% discount to Total
        }
      },
      updateCartSummary() {
        const subtotal = this.BuyItems.reduce(
          (sum, item) => sum + item.price * item.quality,
          0
        );
        this.buyItems[0].price = subtotal;
        this.buyItems[2].price = subtotal; // Update Total price
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
  </style>
  