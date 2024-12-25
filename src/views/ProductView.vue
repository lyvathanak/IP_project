<template>
    <Header/>
    <ComputerComponent/>
    <Footer/>

</template>

<script>
import Header from '@/components/Header.vue';
import ComputerComponent from '@/components/ComputerComponent.vue';
import Footer from '@/components/Footer.vue';
export default{
    components:{
        Header,
        ComputerComponent,
        Footer,

    }
}
</script>