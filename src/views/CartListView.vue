<template>
<Header/>
<ListAfterBuy/>
<!-- <CartTotal/> -->
<Footer/>
</template>
<script>
import CartTotal from '@/components/CartTotal.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import ListAfterBuy from '@/components/listAfterBuy.vue';

export default{
    components:{
   Header,ListAfterBuy,CartTotal,Footer
    }
}
</script>