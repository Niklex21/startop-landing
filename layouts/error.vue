<template>
    <div class="justify-between flex flex-col content-between items-center w-screen h-full p-8 md:p-12 absolute top-0">
      <div class="relative h-20"><img class="h-20" src="/banner.png" /></div>
      <h1 class="text-center align-middle relative text-9xl text-red-500 font-bold mb-10">{{error.statusCode}}</h1>
      <h1 class="relaitve text-xl lg:text-3xl text-center px-8 w-full text-red-500">Sorry, you should probably head back to <NuxtLink class="border-b-2 border-red-500 border-solid" to="/">home page</NuxtLink></h1>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>