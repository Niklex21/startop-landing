<template>
  <div class="relative">
    <div id="background" class="relative overflow-hidden bg-scroll bg-no-repeat bg-center bg-cover h-screen" style="background-image: url('/index_bg_1.jpg')">
      <div class="absolute top-0 h-full w-full bg-black bg-opacity-80"></div>
    </div>
    <div id="main" class="text-white content-between flex flex-wrap px-8 md:px-12 pb-8 md:pb-12 justify-around align-middle items-center h-full w-screen absolute top-0">
      <header class="flex items-center w-full h-auto">
        <embed class="block h-48 md:h-72 w-full -mb-20 md:-mb-40" src="/logo.svg" />
        <!-- <img class="hidden md:block w-full h-full" src="/banner_transparent.png" /> -->
      </header>
      <div id="text" class="w-full">
        <h1 class="w-full font-bold text-red-500 text-6xl md:text-8xl text-center">Coming out soon...</h1>
      </div>
      <div class="w-full">
        <h3 class="text-red-500 mb-2 text-center font-mono text-lg md:text-2xl">Subscribe to our <a class="border-b-2 border-current font-bold" href="https://nuoverload.substack.com/">newsletter</a>:</h3>
        <form method="POST" action="/?success=true" name="subscription-form" class="flex w-full border-red-500 border-2 border-solid rounded-sm" data-netlify="true" data-netlify-honeypot="bot-field">
            <input class="focus:outline-none text-red-500 text-center align-middle w-full px-4 h-12 md:h-20 text-lg md:text-3xl placeholder-red-500 placeholder-opacity-40 bg-transparent" placeholder="your@mail.com" type="email" />
            <button class="bg-red-500 text-center text-red-900 font-bold align-middle uppercase w-auto min-w-min px-4 md:px-12 h-12 md:h-20 text-xl md:text-2xl" type="submit">
              <svg class="h-7 block md:h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <!-- <span class="uppercase font-bold hidden md:block">Subscribe</span> -->
            </button>
       </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({}) 
</script>
