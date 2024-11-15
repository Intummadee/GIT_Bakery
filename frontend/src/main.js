import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import router from './router';


import Item from './components/Item.vue'
import NavBar from "./components/NavBar.vue"
import Home from "./components/Home.vue"

const app = createApp(App)
app.use(router);
app.component('type-menu', Item)
app.component('NavBar', NavBar)
app.component('Home', Home)
app.mount('#app')
