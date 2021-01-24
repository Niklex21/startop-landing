<template>  
  <div class="text-red-main font-futura-pt">
    <div id="background" class="fixed top-0 w-screen overflow-hidden bg-no-repeat bg-center bg-fixed h-screen" style="background-image: url('/index_bg_1.jpg');">
        <div class="absolute top-0 h-screen bg-fixed w-screen bg-black bg-opacity-70"></div>
    </div>
    <div class="absolute top-0 w-full">
      <div id="screen-1" class="screen-screen">
        <div id="header" class="flex content-center justify-center items-center md:content-start md:justify-items-start md:justify-between md:items-start w-full h-auto">
          <img class="block md:hidden h-28 md:h-40" src="/logo.png" alt="logo" />
          <img class="hidden md:block h-20" src="/banner.png" alt="banner" />
          <nav class="hidden uppercase font-medium h-20 md:flex items-center text-3xl">
            <div class="h-auto w-auto">
              <a class="m-2 font-bold hover-border-b-2" href="https://startop.substack.com">newsletter</a>
              <a class="m-2 hover-border-b-2" href="#screen-2">benefits</a>
              <a class="m-2 hover-border-b-2" href="#screen-3">team</a>
              <a class="m-2 hover-border-b-2" href="#screen-footer">contact</a>
            </div>
          </nav>
        </div>
        <div id="text" class="w-full">
          <h1 class="w-full font-bold text-6xl md:text-8xl text-center">The Boston Startup Newsletter</h1>
        </div>
        <div id="subscription-form" class="w-full overflow-hidden mx-auto flex flex-col content-center justify-center items-center">
          <iframe src="https://startop.substack.com/embed" width="400" height="80" class="-mb-2" style="background:transparent;" frameborder="0" scrolling="no"></iframe>
          <span class="w-full text-center text-lg italic">... or you can view it <a class="underline" href="https://startop.substack.com/">here</a>!</span>
        </div>
      </div>
      <div id="screen-2" class="screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-24 md:text-7xl text-center">Why subscribe?</h2>
        <div class="md:grid md:grid-cols-2 md:gap-8 md:gap-x-12 text-3xl align-middle items-center justify-items-around">
          <card-feature 
                titleText="Follow the Trends" 
                mainText="Learn about 10 to 15 most innovative startups per week in Boston community."
                imagePath="icons/trend.svg" />
          <card-feature 
                titleText="Job Opportunities" 
                mainText="Gain exposure to internships & job opportunities with the early-stage startups."
                imagePath="icons/work.svg" />
          <card-feature 
                titleText="Join the Community" 
                mainText="Get a curated list of the entrepreneurial events taking place in Boston each week."
                imagePath="icons/idea.svg" />
          <card-feature 
                titleText="Become Involved" 
                mainText="Engage with founders and innovators shaping the future in Boston and the world."
                imagePath="icons/user_group.svg" />
        </div>
      </div>
      <div id="screen-3" class="screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-16 md:text-7xl text-center">Our team</h2>
        <div class="md:grid md:grid-cols-5 md-gap-4 align-middle items-center justify-items-around">
          <card-profile
           imagePath="profile_pictures/alex_marley.jpg"
           name="Alex Marley"
           title="Founder" />
          <card-profile
           imagePath="profile_pictures/madyn_singh.jpeg"
           name="Madyn Singh"
           title="Chief Marketing Officer" />
          <card-profile
           imagePath="profile_pictures/nina.jpg"
           name="Nina Miller"
           title="Graphic Designer" />
          <card-profile
           imagePath="profile_pictures/nate.jpeg"
           name="Nate Peters"
           title="Venture Director" />
          <card-profile
           imagePath="profile_pictures/alex.jpg"
           name="Alex Nikanov"
           title="Web developer" />
        </div>
      </div>
      <div id="screen-footer" class="screen-full bg-black md:grid text-gray-300 md:grid-cols-3">
        <div class="mb-2">
          <iframe src="https://startop.substack.com/embed" width="400" height="80" class="-mb-2" style="background:transparent;" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="text-center">
          <div class="text-2xl w-full mb-2">
            <a class="hover-border-b-2" href="mailto:">someemail@something.com</a>
          </div>
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="https://startop.substack.com">newsletter</a>
          </div>
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="https://www.linkedin.com/company/thestartop/">linkedin</a>
          </div>
        </div>
        <div class="hidden text-right md:block">
          <div class="text-2xl w-full mb-2">
            <a class="hover-border-b-2" href="#screen-2">benefits</a>
          </div>
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="#screen-3">team</a>
          </div>
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="#screen-footer">contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>

