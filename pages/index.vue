<template>  
  <div class="font-futura text-red-main">
    <div id="background" class="fixed top-0 w-screen overflow-hidden bg-no-repeat bg-center bg-fixed h-screen" style="background-image: url('/index_bg_1.jpg')">
        <div class="absolute top-0 h-screen bg-fixed w-screen bg-black bg-opacity-70"></div>
    </div>
    <div class="absolute top-0 w-full">
      <div id="screen-1" class="screen-screen">
        <div class="flex content-center justify-center items-center md:content-start md:justify-items-start md:justify-between md:items-start w-full h-auto">
          <img class="block md:hidden h-28 md:h-40" src="/logo.png" alt="logo" />
          <img class="hidden md:block h-20" src="/banner.png" alt="banner" />
          <nav class="hidden uppercase font-bold h-20 md:flex items-center text-2xl">
            <div class="h-auto w-auto">
              <a class="m-2 hover-border-b-2" href="https://startop.substack.com">newsletter</a>
              <a class="m-2 hover-border-b-2" href="#screen-2">benefits</a>
              <a class="m-2 hover-border-b-2" href="#screen-3">team</a>
              <a class="m-2 hover-border-b-2" href="#footer ">contact</a>
            </div>
          </nav>
        </div>
        <div id="text" class="w-full">
          <h1 class="w-full font-bold text-6xl md:text-8xl text-center">The Boston Startup Newsletter</h1>
        </div>
        <div class="w-full h-28 md:h-40 flex flex-wrap content-end">
          <a class="w-full" href="https://startop.substack.com/subscribe"><h3 class="w-full border-2 border-solid p-4 text-center border-red-main uppercase text-2xl md:text-4xl">Subscribe to our <br class="block md:hidden"> newsletter here</h3></a>
        </div>
      </div>
      <div id="screen-2" class="screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-12 md:text-7xl text-center">Why subscribe?</h2>
        <div class="md:grid md:grid-cols-2 md:gap-4 text-3xl align-middle items-center justify-items-around">
          <!-- TODO: figured out why the hell the SVGs are not displayed -->
          <card-feature 
                titleText="Follow the Trends" 
                mainText="Learn about 10 to 15 most innovative startups per week in Boston community."
                imagePath="/icons/trend.svg"
                icon/>
          <card-feature 
                titleText="Job Opportunities" 
                mainText="Gain exposure to internships & job opportunities with the early-stage startups."
                imagePath="/icons/work.svg?inline"
                icon/>
          <card-feature 
                titleText="Join the Community" 
                mainText="Get a curated list of the entrepreneurial events taking place in Boston each week."
                imagePath="/icons/idea.svg"
                icon/>
          <card-feature 
                titleText="Become Involved" 
                mainText="Engage with founders and innovators shaping the future in Boston and the world."
                imagePath="/icons/user_group.svg?inline"
                icon/>
        </div>
      </div>
      <div id="screen-3" class="screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-12 md:text-7xl text-center">Our team</h2>
        <div class="md:grid md:grid-cols-5 md-gap-4 align-middle items-center justify-items-around">
          <card-profile
           imagePath="/profile_pictures/alex_marley.jpg"
           name="Alex Marley"
           title="Founder" />
          <card-profile
           imagePath="/profile_pictures/madyn_singh.jpeg"
           name="Madyn Singh"
           title="Chief Marketing Officer" />
          <card-profile
           imagePath="/profile_pictures/nina.jpg"
           name="Nina Miller"
           title="Graphic Designer" />
          <card-profile
           imagePath="/profile_pictures/nate.jpeg"
           name="Nate Peters"
           title="Venture Director" />
          <card-profile
           imagePath="/profile_pictures/alex.jpg"
           name="Alex Nikanov"
           title="Web developer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

