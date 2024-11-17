<template>
    <div>
        <div class="flex flex-col justify-center items-center pt-[1rem] w-full ">
            <h1 class="text-2xl text-black tracking-[.35em]">WelCome</h1>
            <div class="text-normal flex flex-row mt-[2rem] py-1 justify-evenly items-center bg-lightBg w-3/4 border-b-4 border-slate-300"> 
                <p>ขนม11</p>
                <p>ขนม12</p>
                <p class="text-[yellow] bg-red-950 -translate-y-5 text-lg  p-2 rounded-full">Jabs</p>
                <p>ขนม13</p>
                <p>ขนม14</p>
            </div>
            
            

        </div>
        
        <div class="   h-auto mt-[2rem] p-4 flex justify-center ">
            <div class="grid grid-cols-4 gap-4 w-4/5 ">
                <div v-for="product in productArray" :key="product.name"
                    class="flex text-center justify-center"
                >
                    <ProductItem :data="product"  />
                    <!-- {{ product.name }} -->
                </div>

            </div>
            
        </div>
        

    </div>
  
</template>

<script>
import ProductItem from "../components/ProductItem.vue"
export default {
    components: {
        ProductItem
    },
    data() {
      return {
        productArray: [
            { name: 'ครัวซองต์', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'เอแคลร์', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'มินิพาย', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'โดนัท', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'มัฟฟิน', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'ชูโรส', img: 'https://images.pexels.com/photos/8909323/pexels-photo-8909323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'มาการอง', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'ทาร์ตไข่', img: 'https://images.pexels.com/photos/16026716/pexels-photo-16026716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
        ],
      }
    }

}
</script>

<style>

</style>