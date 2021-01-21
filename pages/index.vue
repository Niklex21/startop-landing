<template>  
  <div class=" text-red-main">
    <div id="background" class="fixed top-0 w-screen overflow-hidden bg-no-repeat bg-center bg-fixed h-screen" style="background-image: url('/index_bg_1.jpg')">
        <div class="absolute top-0 h-screen bg-fixed w-screen bg-black bg-opacity-70"></div>
    </div>
    <div class="absolute top-0 w-full font-futura">
      <div id="screen-1" class="content-between relative flex flex-wrap p-8 md:p-12 justify-around align-middle items-center h-screen w-full">
        <div class="flex content-center justify-center items-center w-full h-auto">
          <img class="block h-28 md:h-40" src="/logo.png" alt="logo" />
        </div>
        <div id="text" class="w-full">
          <h1 class="w-full font-bold text-6xl md:text-8xl text-center">The Boston College Startup Newsletter</h1>
        </div>
        <div class="w-full h-28 md:h-40 flex flex-wrap content-end">
          <a class="w-full" href="https://startop.substack.com/subscribe"><h3 class="w-full border-2 border-solid p-4 text-center border-red-main uppercase text-2xl md:text-4xl">Subscribe to our <br class="block md:hidden"> newsletter here</h3></a>
        </div>
      </div>
      <div id="screen-2" class="content-between relative flex flex-wrap p-8 md:p-12 justify-around align-middle items-center h-screen w-full">
        <h2 class="w-full font-bold text-5xl md:text-7xl text-center">Why subscribe?</h2>
        <div class="md:grid md:grid-cols-2 md:gap-4 text-3xl align-middle items-center justify-items-around">
          <card titleText="Follow the trends" 
                mainText="Learn about the most innovative startups in Boston"
                imagePath="~assets/icons/trend.svg"
                icon/>
          <card titleText="Work opportunities" 
                mainText="Find hot employment opportunities and help early-stage ventures"
                imagePath="@/assets/icons/work.svg?inline"
                icon/>
          <card titleText="Get inspired!" 
                mainText="Look for inspiration in the best ideas currently on the market"
                imagePath="@/assets/icons/idea.svg?inline"
                icon/>
          <card titleText="Learn by example" 
                mainText="Take a closer look into practical entrepreneuship"
                imagePath="@/assets/icons/user_group.svg?inline"
                icon/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

