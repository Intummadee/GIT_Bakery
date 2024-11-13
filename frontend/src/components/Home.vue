<template>
  <div>
    
    <!-- image and name bakery -->
    <div class="w-full h-[24rem]">
      <div class="relative">
        <img src="../assets/img-1.jpg" alt="bakery image icon"
        class="object-cover w-full h-[24rem]">
        <div class="absolute inset-0 flex items-center justify-center  
        bg-gray-700 bg-opacity-30 text-4xl font-extrabold text-white">
        <div class="flex-row text-center">
          <p class="text-[yellow] text-2xl">Jabs</p>
          <p class="text-3xl">Bakery shop</p>
          <p class="text-base font-normal">Provide bakery hot and delicous</p>
          
          <button class="btn rounded-lg border-2 bg-white hover:bg-slate-200 text-black text-xl py-[0.5px] px-4">
            <router-link to="/menu">Menu</router-link>
          </button>

        </div>
        
        </div>
      </div>
    </div>

    <div class="bg-pink-200 h-15 relative flex justify-evenly w-full ">
      <Item nameBaker="สโคน" />     
      <Item nameBaker="โฮลวีต" />
      <Item nameBaker="ครัวซองต์" />
      <Item nameBaker="บาร์แกต" />
    </div>

    
    <div class="bg-blue-400 h-[10rem]">
      <p>message</p>
      

    </div>

    
    <button @click="fetchData">Get Data from API Fameee</button>
  </div>
</template>

<script>
import Item from './Item.vue'
// import BakeryItem from './components/BakeryItem.vue';
export default {
  components: { Item },

}
</script>

<style>

</style>