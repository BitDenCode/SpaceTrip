<template>
  <div id="app">
    <section id="home"><Home /></section>
    <section id="destinations"><Destinations /></section>
    <section id="pricing"><Pricing /></section>
    <section id="booking"><Booking /></section>

    <!-- TabBar всегда внизу -->
    <TabBar />
  </div>
</template>

<script setup lang="ts">
import Home from './components/Home.vue';
import Destinations from './components/Destinations.vue';
import Pricing from './components/Pricing.vue';
import Booking from './components/Booking.vue';
import TabBar from './components/TabBar.vue';
</script>

<style scoped>
#app {
  scroll-behavior: smooth;
  padding-bottom: 70px; /* Учитывает высоту TabBar */
}
section {
  padding-top: 10px; /* Чтобы якорь не прятался за TabBar */
  min-height: 100vh;
}
</style>
