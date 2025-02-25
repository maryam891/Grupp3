<script setup>
import NavBar from "./components/NavBar.vue";
/* import Nasa from "./components/Nasa.vue";*/
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
<!-- <Nasa /> -->
    <RouterView />
    <Footer></Footer>
  </div>
</template>
