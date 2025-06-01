<template>
  <section class="pricing">
    <h2 class="title">
      <DollarSign class="icon" />
      Цены
    </h2>
    <div class="price-cards">
      <div
        v-for="item in prices"
        :key="item.destination"
        class="price-card"
      >
        <div class="card-header">
          <component :is="item.icon" class="route-icon" />
          <h3>{{ item.destination }}</h3>
        </div>
        <p>🕒 {{ item.duration }}</p>
        <p class="price">${{ item.price }} млн</p>
        <ul class="features">
          <li v-for="feature in item.features" :key="feature">✔ {{ feature }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DollarSign, Rocket, Moon, Circle, Satellite } from 'lucide-vue-next'

interface PriceItem {
  destination: string;
  duration: string;
  price: number;
  icon: any;
  features: string[];
}

const prices: PriceItem[] = [
  {
    destination: 'Орбита Земли',
    duration: '1 день',
    price: 10,
    icon: Rocket,
    features: ['Тренировка', 'Скафандр', 'Питание', 'Окно с видом на планету Земля'],
  },
  {
    destination: 'Станция Aurora',
    duration: '3 дня',
    price: 30,
    icon: Satellite,
    features: ['Тренировка', 'Скафандр', 'Питание', 'Экскурсия по станции', 'Специальные аппартаменты "Капсула"'],
  },
  {
    destination: 'Луна',
    duration: '7 дней',
    price: 55,
    icon: Moon,
    features: ['Тренировка', 'Скафандр', 'Питание', 'Гид', 'Фотосессия', 'Прогулка по Луне'],
  },
  {
    destination: 'Марс',
    duration: '30+ дней',
    price: 150,
    icon: Circle,
    features: ['Полная подготовка', 'Креосон (по желанию)', 'Посадка', 'Колония', 'Экскурсия к подземному озеру "Маск"'],
  },
]
</script>

<style scoped>
.pricing {
  padding: 48px 20px 96px;
  text-align: center;
}

.title {
  font-size: 24px;
  color: var(--accent-color);
  margin-bottom: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.icon {
  width: 24px;
  height: 24px;
}

.price-cards {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}

@media (min-width: 480px) {
  .price-cards {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

.price-card {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  color: var(--text-color);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;
}

.price-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
}

.route-icon {
  width: 20px;
  height: 20px;
  stroke: var(--accent-color);
}

.price-card h3 {
  font-size: 18px;
  font-weight: bold;
  color: var(--accent-color);
}

.price {
  margin: 12px 0;
  font-size: 18px;
  font-weight: bold;
  color: var(--accent-color);
}

.features {
  text-align: left;
  margin-top: 10px;
  padding-left: 0;
  list-style: none;
}

.features li {
  font-size: 13px;
  color: #ccc;
  margin-bottom: 4px;
}
</style>
