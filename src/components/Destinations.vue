<template>
  <section class="destinations fade-in">
    <h2 class="title">
      <Rocket class="icon" />
      Направления
    </h2>
    <div class="cards">
      <div
        v-for="destination in destinations"
        :key="destination.name"
        class="card"
      >
        <img :src="destination.image" :alt="destination.name" />
        <h3 class="card-title">{{ destination.name }}</h3>
        <p class="card-description">{{ destination.description }}</p>
        <span class="duration">⏱ {{ destination.duration }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Destination {
  name: string;
  image: string;
  description: string;
  duration: string;
}

import { Rocket } from 'lucide-vue-next'

import orbitImg from '../assets/images/orbit.png';
import moonImg from '../assets/images/moon.png';
import marsImg from '../assets/images/mars.png';
import stationImg from '../assets/images/station.png';

const destinations: Destination[] = [
  {
    name: 'Орбитальный тур',
    image: orbitImg,
    description: 'Небольшой тур вокруг Земли на 1 день.',
    duration: '1 день',
  },
  {
    name: 'Станция Aurora',
    image: stationImg,
    description: '3-дневный визит на передовую орбитальную станцию.',
    duration: '3 дня',
  },
  {
    name: 'Луна',
    image: moonImg,
    description: 'Полет на Луну с посадкой и прогулкой по поверхности.',
    duration: '7 дней',
  },
  {
    name: 'Марс',
    image: marsImg,
    description: 'Экспедиция на Марс для самых смелых!',
    duration: '30+ дней',
  },  
];

</script>

<style scoped>
.destinations {
  min-height: 100vh;
  padding: 48px 20px 96px;
  text-align: center;
}

.title {
  font-size: 24px;
  color: var(--accent-color);
  margin-bottom: 32px;
  font-weight: 700;
}

.cards {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}

@media (min-width: 480px) {
  .cards {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  color: var(--text-color);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 16px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
  color: var(--accent-color);
}

.card-description {
  font-size: 14px;
  color: #ccc;
  line-height: 1.4;
  margin-bottom: 12px;
}

.duration {
  display: inline-block;
  font-size: 13px;
  font-weight: bold;
  color: var(--accent-color);
}
</style>
