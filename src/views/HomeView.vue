<template>
    <div>
        <Header/>
        <main>
            <div>
                Body
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default{
    name: 'HomeView',
    components:{
        Header,
        Footer,
    },
};
</script>

<style scoped>

</style>