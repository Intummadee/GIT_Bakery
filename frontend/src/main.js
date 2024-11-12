import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'


import Item from './components/Item.vue'


const app = createApp(App)
app.component('type-menu', Item)
app.mount('#app')
