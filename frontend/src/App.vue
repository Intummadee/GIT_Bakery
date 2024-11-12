<template>
  <div>
    <h1>FastAPI + Vue</h1>
    <button @click="fetchData">Get Data from API</button>
    <p>{{ message }}</p>
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
