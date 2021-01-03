<template>
  <div class="relative">
    <div id="background" class="relative overflow-hidden bg-scroll bg-no-repeat bg-center bg-cover h-screen" style="background-image: url('/index_background.jpg')">
      <div class="absolute top-0 h-full w-full bg-black bg-opacity-80"></div>
    </div>
    <div id="main" class="text-white font-mono text-center justify-around align-middle items-center h-full w-screen absolute top-0">
      <div id="header" class="flex items-center w-screen h-auto justify-between">
        <div id="logo" class="m-4 h-20 w-20 md-m-5 lg-m-6"> <img class="h-full w-full" src="/logo_no_text.png" /></div>
        <div id="newsletter" class="mr-4 border-solid border-white pb-1 border-b-4 rounded-none"><a class="uppercase text-4xl md:text-5xl" href="https://nuoverload.substack.com">newsletter</a></div>
        <div id="socials" class="hidden md:block"></div>
      </div>
      <div id="text" class="w-full relative">
        <h1 class="flex uppercase text-center w-full text-7xl xl px-8 my-auto">Coming out soon</h1>
        <h3>In the meantime, check out our </h3>
        <h3>Subscribe to updates:</h3>
        <form name="subscription-form" netlify>
          <input placeholder="Email" type="email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({}) 
</script>
