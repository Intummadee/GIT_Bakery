<template>
  
  <div>
    <!-- Navbar -->
    <NavBar />
    
    <main>
        <RouterView />
    </main>

    
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
