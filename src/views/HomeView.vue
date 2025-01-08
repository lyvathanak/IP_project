<template>
<Header/>
<Promotion/>
<Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Promotion from '@/components/Promotion.vue';
export default{
    name: 'HomeView',
    components:{
        Header,Promotion,Footer
    }
}
</script>

<style scoped>

</style>