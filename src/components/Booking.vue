<template>
  <section class="booking">
    <h2 class="title">
      <Pencil class="icon" />
      Бронирование
    </h2>

    <form @submit.prevent="submitForm" class="form">
      <select v-model="form.destination" required class="input">
        <option disabled value="">Выберите направление</option>
        <option>Орбитальный тур</option>
        <option>Луна</option>
        <option>Марс</option>
        <option>Станция Aurora</option>
      </select>
      <input
        v-model="form.name"
        type="text"
        placeholder="Имя"
        required
        maxlength="35"
        class="input"
      />
      <input
        v-model.number="form.age"
        type="number"
        placeholder="Возраст"
        required
        class="input"
      />
      <input
        v-model="form.phone"
        type="tel"
        placeholder="Телефон"
        required
        maxlength="35"
        class="input"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Электронная почта"
        required
        maxlength="35"
        class="input"
      />
      
      <label class="checkbox-label">
        <input type="checkbox" v-model="form.medicalCheck" />
        <span>Подтверждаю прохождение медосмотра</span>
      </label>

      <button type="submit" :disabled="loading">
        {{ loading ? "Отправка..." : "Отправить заявку" }}
      </button>
    </form>

    <!-- Модалка подтверждения -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <h3>✅ Заявка отправлена!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        <button @click="showModal = false">Закрыть</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pencil } from 'lucide-vue-next'

const form = ref({
  name: '',
  age: null as number | null,
  phone: '',
  email: '',
  medicalCheck: false,
  destination: '',
})

const loading = ref(false)
const showModal = ref(false)

const submitForm = () => {
  if (!form.value.medicalCheck) {
    alert('Вы должны подтвердить прохождение медосмотра.')
    return
  }

  loading.value = true

  setTimeout(() => {
    const payload = JSON.stringify(form.value, null, 2)
    console.log('Заявка:', payload)

    loading.value = false
    showModal.value = true

    // Сброс формы при необходимости:
    // form.value = { ...initial }
  }, 1500)
}
</script>

<style scoped>
.booking {
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
  stroke: var(--accent-color);
}

.form {
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background: #222;
  color: #fff;
  outline: none;
}

.input:focus {
  outline: 2px solid var(--accent-color);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #ccc;
}

.checkbox-label input[type='checkbox'] {
  transform: scale(1.6);
  accent-color: var(--accent-color);
}

button {
  padding: 12px;
  background-color: var(--accent-color);
  color: black;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

button:hover:not([disabled]) {
  background-color: #29b6f6;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-content {
  background: #111;
  color: #fff;
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  max-width: 90%;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
}

.modal-content h3 {
  font-size: 20px;
  margin-bottom: 12px;
}

.modal-content button {
  margin-top: 16px;
  padding: 10px 16px;
  background: var(--accent-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
