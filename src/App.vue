<-- <template> : Le HTML de ce composant. -->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Bienvenu dant votre App Vue.js App"/>
</template>

<-- <script> : Le code javascript pour gérer les données et comportement -->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<-- <style> : Les styles spécifiques à ce composant. -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
