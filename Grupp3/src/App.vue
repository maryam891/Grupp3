<script setup>
import NavBar from "./components/NavBar.vue";
import FooterNav from "./components/FooterNav.vue";
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <FooterNav />
  </div>
</template>
