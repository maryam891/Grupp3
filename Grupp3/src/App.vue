<script setup>
import NavBar from "./components/NavBar.vue";
import Nasa from "./components/Nasa.vue"
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <Nasa/>

  </div>
</template>
