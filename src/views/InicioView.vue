<template>
        <img src="https://www.itca.edu.sv/wp-content/themes/elaniin-itca/images/logoColor.png" alt="logo">
        <h1>Inicio</h1>
        <button @click="navegar">Ir a nosotros</button>
</template>


<script>
export default{
    name:'InicioView', 
    methods: {
        navegar(){
            this.$router.push('/nosotros');
        }
    }
}

</script>


<style scoped>
img{
    width: 35%;
    padding: 20px;
}
button{
    padding: 10px; 
    background-color: salmon;
    color: white;
    border-radius: 30px;
    border: 1px solid wheat;
}

</style>