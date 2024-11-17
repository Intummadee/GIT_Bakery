<template>
    
    <div class=" bg-lightBg px-2 m-2 rounded shadow h-[14rem] w-[10rem] flex flex-col justify-around drop-shadow-xl hover:scale-110">
      <div>
        <img :src="data.img" alt="Product Image" />
        <h1 class="text-black text-[14px] text-left">{{ data.name }}</h1>
      </div>
      
      
      <div class="flex flex-row justify-between ">
        <div class="flex flex-col justify-start text-left pr-3">
          <p class="text-[10px] text-slate-500">price</p>
          <p>110$</p>
        </div>

        <button class="px-3  rounded-sm bg-red-900 hover:bg-red-950 text-[yellow]">Buy</button>
      </div>

    </div>
  </template>
          
  <script>
  export default {
    props: {
      data: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped></style>
  