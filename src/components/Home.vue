<template>
  <section class="home fade-in">
    <div class="overlay">
      <div class="rocket-wrapper">
        <RocketAnimation />
      </div>
      <h1 class="title">Добро пожаловать в SpaceTrip</h1>
      <p class="subtitle">
        Откройте для себя Вселенную! Мы предлагаем захватывающие путешествия — от суборбитальных экскурсий до полетов на Луну и Марс.
      </p>
      <a href="#destinations" class="start-button">Начать путешествие</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import RocketAnimation from './RocketAnimation.vue';
</script>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  background: url('../assets/images/space-bg.png') center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 100px;
  text-align: center;
  color: var(--text-color);
}

.overlay {
  background: rgba(0, 0, 0, 0.39);
  padding: 40px 24px;
  border-radius: 20px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}

.rocket-wrapper {
  max-width: 120px;
  margin: 0 auto 24px;
}

.title {
  font-size: 24px;
  margin: 0 0 16px;
  font-weight: 700;
  color: var(--accent-color);
}

.subtitle {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 24px;
  color: #ccc;
}

.start-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--accent-color);
  color: #000;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color var(--transition-fast);
}

.start-button:hover {
  background-color: var(--accent-hover);
}
</style>
