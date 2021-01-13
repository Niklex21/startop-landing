<template>
  <div class="relative font-futura">
    <div id="background" class="relative overflow-hidden bg-scroll bg-no-repeat bg-center bg-cover h-screen" style="background-image: url('/index_bg_1.jpg')">
      <div class="absolute top-0 h-full w-full bg-black bg-opacity-70"></div>
    </div>
    <div id="main" class="text-white content-between flex flex-wrap p-8 md:p-12 justify-around align-middle items-center h-full w-screen absolute top-0">
      <header class="flex content-center justify-center items-center w-full h-auto">
        <img class="block h-28 md:h-40" src="/logo.png" alt="logo" />
        <!-- <img class="hidden md:block w-full h-full" src="/banner_transparent.png" /> -->
      </header>
      <div id="text" class="w-full">
        <h1 class="w-full text-red-main font-bold text-6xl md:text-8xl text-center">Coming out soon...</h1>
      </div>
      <div class="w-full h-28 md:h-40 flex flex-wrap content-end">
        <a class="w-full" href="https://startop.substack.com/subscribe"><h3 class="w-full border-2 border-solid p-4 text-center text-red-main border-red-main uppercase text-2xl md:text-4xl">Subscribe to our <br class="block md:hidden"> newsletter here</h3></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({}) 
</script>
