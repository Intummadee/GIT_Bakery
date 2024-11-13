<template>
    <div class="bg-lime-600 w-[5rem] ml-9 h-[3rem] z-50 text-center content-center -translate-y-6">
      <h1>{{ nameBaker  }}</h1>
      
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