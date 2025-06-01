import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Telegram WebApp API инициализация
// Убедись, что Telegram Web App объект доступен в window
declare global {
  interface Window {
    Telegram: any
  }
}

if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready()
  window.Telegram.WebApp.expand()
  // Можешь настроить MainButton, если нужно:
  // window.Telegram.WebApp.MainButton.setText('Отправить').show()
}

createApp(App).mount('#app')
