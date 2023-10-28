<template>

        <h1>Carreras por Sede</h1>
        <div id="container">
            <h1>{{ $route.params.id }}</h1>
            <h4>{{ $route.params.sede }}</h4>
            <div v-if="sede==1">
                <p v-for="(carrera, i) in sede1" :key="i">
                    {{ carrera }}
                </p>
            </div>
            <div v-if="sede==2">
                <p v-for="(carrera, i) in sede1" :key="i">
                    {{ carrera }}
                </p>
            </div>
            <div v-if="sede==3">
                <p v-for="(carrera, i) in sede1" :key="i">
                    {{ carrera }}
                </p>
            </div>
            <div v-if="sede==4">
                <p v-for="(carrera, i) in sede1" :key="i">
                    {{ carrera }}
                </p>
            </div>
            <div v-if="sede==5">
                <p v-for="(carrera, i) in sede1" :key="i">
                    {{ carrera }}
                </p>
            </div>
        </div>
</template>

<script>
export default{
    name: 'CarrerasSede', 
    data(){
        return{
            sede: this.$route.params.id, 
            sede1: ['Ing. Civil', 'Arquitectura', 'Redes Informáticas'], 
            sede2: ['Gastronomía', 'Mecatrónica', 'Desarrollo de Software'], 
            sede3: ['Ing. Industrial', 'Electrónica', 'Mecatrónica'], 
            sede4: ['Energías Renevables', 'Arquitectura', 'Mecatrónica'], 
            sede5: ['Química', 'Arquitectura', 'Redes Informáticas'], 
        }
    }
}
</script>

<style scoped>
#container{
    padding: 10px;
    border: 1px solid salmon;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    border-radius: 30px;
    color: salmon;
}
</style>