<template>
<Header/>
<ListAfterBuy/>
<Footer/>
</template>
<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import ListAfterBuy from '@/components/listAfterBuy.vue';

export default{
    components:{
   Header,ListAfterBuy,Footer
    }
}
</script>