<template>  
  <div>
    <div id="background" class="absolute top-0 w-screen overflow-hidden bg-no-repeat bg-center bg-fixed h-screen" style="background-image: url('/index_bg_1.jpg')">
        <div class="absolute top-0 h-screen bg-fixed w-screen bg-black bg-opacity-70"></div>
    </div>
    <div class="absolute top-0 w-full font-futura">
      <div id="screen-1" class="content-between relative flex flex-wrap p-8 md:p-12 justify-around align-middle items-center h-screen w-full">
        <div class="flex content-center justify-center items-center w-full h-auto">
          <img class="block h-28 md:h-40" src="/logo.png" alt="logo" />
        </div>
        <div id="text" class="w-full">
          <h1 class="w-full text-red-main font-bold text-6xl md:text-8xl text-center">The Boston College Startup Newsletter</h1>
        </div>
        <div class="w-full h-28 md:h-40 flex flex-wrap content-end">
          <a class="w-full" href="https://startop.substack.com/subscribe"><h3 class="w-full border-2 border-solid p-4 text-center text-red-main border-red-main uppercase text-2xl md:text-4xl">Subscribe to our <br class="block md:hidden"> newsletter here</h3></a>
        </div>
      </div>
      <div id="screen-2" class="content-between relative flex flex-wrap p-8 md:p-12 justify-around align-middle items-center h-screen w-full">
        <h2 class="w-full text-red-main font-bold text-5xl text-center">Why subscribe?</h2>
        <ul>
          <li>Stay up to date with the trends</li>
          <li>Work opportunities</li>
          <li>Get inspired!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({}) 
</script>
