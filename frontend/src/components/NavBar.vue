<template>
  <div class="flex flex-row	justify-between px-[5%] h-[3rem]  items-center font-bold">
    <div class="w-[50%]">Bakery Shop</div>
    <div class="w-[50%] flex flex-row justify-evenly ">
        <div><RouterLink to="/">Home</RouterLink></div>
        <div><RouterLink to="/about">About</RouterLink></div>
        <div><RouterLink to="/Menu">Menu</RouterLink></div>
        <div>Profile</div>
        
    </div>

    <main>
        <RouterView />
    </main>
  </div>


</template>

<script>
import { ref } from 'vue'
export default {
    data() {
      return {
        
        
      }
    }

}
</script>

<style>

</style>