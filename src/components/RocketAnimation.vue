<template>
  <div class="rocket-container">
    <img :src="rocketImage" alt="Rocket" class="rocket" />
  </div>
</template>

<script setup lang="ts">
import rocketImage from '../assets/images/rocket.png';
// Ничего не нужно, просто статическая анимация
</script>

<style scoped>
.rocket-container {
  
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
  background: linear-gradient(to top, #00001400, #0a0a2a00);
}

.rocket {
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  animation: launch 5s ease-in-out infinite;
}

@keyframes launch {
  0% {
    bottom: -100px;
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }
}
</style>
