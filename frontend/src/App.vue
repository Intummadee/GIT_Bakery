<template>
  
  <div>
    <!-- Navbar -->
    <NavBar />

    <!-- image and name bakery -->
    <div class="w-full h-[24rem]">
      <div class="relative">
        <img src="./assets/img-1.jpg" alt="bakery image icon"
        class="object-cover w-full h-[24rem]">
        <div class="absolute inset-0 flex items-center justify-center  
        bg-gray-700 bg-opacity-30 text-4xl font-extrabold text-white">
        <div class="flex-row text-center">
          <p class="text-[yellow] text-2xl">Jabs</p>
          <p class="text-3xl">Bakery shop</p>
          <p class="text-base font-normal">Provide bakery hot and delicous</p>
          
          <button class="btn">
            <router-link to="/menu">Menu</router-link>
          </button>

        </div>
        
        </div>
      </div>
    </div>

    
    <div class="bg-blue-400 h-[10rem]">
      <p>{{ message }}</p>
      <type-menu />

    </div>

    
    <button @click="fetchData">Get Data from API Fameee</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {

  setup() {
    const message = ref("")

    const fetchData = async () => {
      const response = await fetch('/api/data')
      const data = await response.json()
      message.value = data.data
    }

    return { message, fetchData }
  },
}
</script>

<style>
h1 {
  color: #42b983;
}
</style>
