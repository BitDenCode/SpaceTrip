<template>
  <nav class="tab-bar">
    <button :class="{ active: activeSection === 'home' }" @click="scrollTo('home')">
      <Home :size="20" />
      <span>Главная</span>
    </button>
    <button :class="{ active: activeSection === 'destinations' }" @click="scrollTo('destinations')">
      <Rocket :size="20" />
      <span>Маршруты</span>
    </button>
    <button :class="{ active: activeSection === 'pricing' }" @click="scrollTo('pricing')">
      <DollarSign :size="20" />
      <span>Цены</span>
    </button>
    <button :class="{ active: activeSection === 'booking' }" @click="scrollTo('booking')">
      <Pencil :size="20" />
      <span>Бронь</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Home, Rocket, DollarSign, Pencil } from 'lucide-vue-next';

const activeSection = ref('home');

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length > 0) activeSection.value = visible[0].target.id;
    },
    { threshold: 0.3 } // был 0.5 — слишком строго
  );

  ['home', 'destinations', 'pricing', 'booking'].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
</script>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #111;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  z-index: 999;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.4);
  margin: 0;
}

button {
  all: unset; /* сбрасывает все стили */
  flex: 1;
  text-align: center;
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  gap: 4px;
  cursor: pointer;
}

button.active {
  color: #4fc3f7;
  font-weight: bold;
}

</style>
