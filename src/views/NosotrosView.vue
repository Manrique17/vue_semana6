<template>
    <img src="https://www.itca.edu.sv/wp-content/uploads/2023/06/BannerWeb2_CE24.png" alt="foto">
    <h3>Valores</h3>
    <ValoresCard v-for="(valor, i) in valores" :key="i" :detalle="valor"/>
</template>


<script>
import ValoresCard from '@/components/ValoresCard.vue';
export default{
    name: 'NosotrosView', 
    data(){
        return{
            valores: ["Excelencia", "Integridad", "Espiritualidad", "Cooperación", "Comunicación"]
        }
    }, 
    components: {
        ValoresCard
    }

}
</script>


<style scoped>
h3{
    color: salmon;
}
img{
    width: 100%;
}  
</style>