<template>
  <nav>
    <!-- Forma 1 -->
    <router-link to="/">Inicio</router-link>

    <!-- Forma 2 -->
    <router-link :to="{path: '/nosotros'}">Nosotros</router-link>

    <!-- Forma 3 -->
    <router-link :to="{name: 'carreras'}">Carreras</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: darkred;
}

nav a {
  font-weight: bold;
  color: white;
  padding: 12px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: darkred;
  background-color: white;
  border-radius: 20px;
}
</style>
