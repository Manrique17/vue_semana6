<template>
    <div>
        {{ detalle }}
    </div>
</template>


<script>
export default{
    name: 'ValoresCard', 
    props: {
        detalle: String
    }
}
</script>


<style scoped>
div{
    padding: 10px;
    border: 1px solid salmon;
    margin: auto;
    width: 30%;
    margin-bottom: 12px;
    border-radius: 30px;
}
</style>