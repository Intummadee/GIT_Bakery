<template>
    <div class="bg-white w-[6rem] ml-9 h-[5rem] z-50 drop-shadow-lg rounded-lg text-center -translate-y-6">
      <div class="w-full  justify-items-center	">
        <img src="../assets/img-2.jpg" class="w-[3rem] h-[3rem] ">
      </div>
      <h1 class="text-black text-base font-bold	">{{ nameBaker }}</h1>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nameBaker: {
        type: String, // กำหนดชนิดข้อมูลที่คาดหวัง
        // required: true, // กำหนดให้ prop นี้ต้องมีค่าเสมอ
        // default: 'Default message from Parent'
      }
    },
    data() {
      return {
        message: 'I like apples'
      }
    }
  };
  </script>
  
  <style></style>