import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// IMPORT CSS TOÀN CỤC
// import './assets/style/variables.css' // Biến màu
// import './assets/style/global.css' // Styles toàn cục

const app = createApp(App)
app.use(createPinia()) // ← THÊM DÒNG NÀY (trước router)
app.use(router)

app.mount('#app')
