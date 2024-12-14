<template>
    <div>
        <Header/>
        <Promotion/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Promotion from '@/components/Promotion.vue';

export default{
    name: 'HomeView',
    components:{
        Header,
        Promotion,
        Footer,
    },
};
</script>

<style scoped>

</style>