<template>
  <div class="text-red-main font-futura-pt">
    <div id="background" class="fixed top-0 w-screen overflow-hidden bg-no-repeat bg-center bg-fixed h-screen" style="background-image: url('/index_bg_1.jpg');">
        <div class="absolute top-0 h-screen bg-fixed w-screen bg-black bg-opacity-70"></div>
    </div>
    <div class="absolute top-0 w-full">
      <div id="screen-1" class="screen-screen">
        <div id="header" class="flex content-center justify-center items-center md:content-start md:justify-items-start md:justify-between md:items-start w-full h-auto">
          <a href="/">
            <img class="block mx-auto lg:hidden h-28 md:h-40" src="/logo.png" alt="logo" />
            <img class="hidden lg:block h-20" src="/banner.png" alt="banner" />
          </a>
          <nav class="hidden uppercase font-medium h-20 lg:flex text-right items-center text-3xl">
            <div class="h-auto w-auto">
              <a class="m-2 font-bold hover-border-b-2" href="https://startop.substack.com">newsletter</a>
              <!-- <a class="m-2 text-red-900" href="#">portfolio</a> -->
              <a class="m-2 hover-border-b-2" href="#screen-3">team</a>
              <a class="m-2 hover-border-b-2" href="#screen-footer">contact</a>
            </div>
          </nav>
        </div>
        <!-- DESKTOP  -->
        <div class="hidden h-full lg:grid grid-cols-2 items-center align-middle">
          <div id="text" class="max-w-prose w-full col-span-1 text-center m-auto items-center justify-center content-center">
            <div class="mb-6"><h1 class="w-full font-bold text-8xl">The Boston Startup Newsletter</h1></div>
            <div class="mb-6"><h3 class="w-full font-normal text-4xl">A bi-weekly newsletter containing curated entrepreneurial focused content for students, founders and friends.</h3></div>
            <div id="subscription-form" class="col-span-1 w-full overflow-hidden flex content-center justify-center items-center">
              <iframe src="https://startop.substack.com/embed" width="400" height="160" class="-mb-10 -mr-14 -mt-6" style="margin-left:-3.70rem; background:transparent;" frameborder="0" scrolling="no"></iframe>
            </div>
          </div>
          <div id="preview" class="overflow-hidden align-middle m-auto sm:justify-center items-center content-center flex">
            <a href="https://startop.substack.com/"> <img class="rounded-xl w-3/4 h-auto m-auto" :src="require(`~/assets/images/preview.png`)"/> </a>
          </div>
        </div>
        <!-- MOBILE -->
        <div id="text" class="w-full max-w-prose text-center lg:hidden">
          <div class="mb-6"><h1 class="w-full font-bold text-6xl md:text-8xl">The Boston Startup Newsletter</h1></div>
          <div><h3 class="w-full font-normal text-2xl">A bi-weekly newsletter containing curated entrepreneurial focused content for students, founders and friends.</h3></div>
        </div>
        <div id="subscription-form" class="lg:hidden w-full overflow-hidden mx-auto flex flex-col content-center justify-center items-center">
          <iframe src="https://startop.substack.com/embed" width="400" height="120" class="-mb-2 overflow-hidden" style="background:transparent;" frameborder="0" scrolling="no"></iframe>
          <span class="w-full text-center text-2xl italic">... or you can read it <a class="underline" href="https://startop.substack.com/">here</a>!</span>
        </div>
      </div>
      <div id="screen-2" class="bg-black bg-opacity-60 screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-24 md:text-7xl text-center">Why Subscribe?</h2>
        <div class="md:grid md:grid-cols-2 md:gap-8 md:gap-x-12 text-3xl align-middle items-center justify-items-around">
          <card-feature
                titleText="Follow the Trends"
                mainText="Learn about 10 to 15 of the most innovative startups per week in the Boston community."
                imagePath="icons/trend.svg" />
          <card-feature
                titleText="Job Opportunities"
                mainText="Gain exposure to internships and job opportunities with the early-stage startups."
                imagePath="icons/work.svg" />
          <card-feature
                titleText="Join the Community"
                mainText="Get a curated list of the entrepreneurial events taking place in Boston each week."
                imagePath="icons/idea.svg" />
          <card-feature
                titleText="Become Involved"
                mainText="Engage with founders and innovators shaping the future of Boston and the world."
                imagePath="icons/user_group.svg" />
        </div>
      </div>
      <div id="screen-3" class="bg-black bg-opacity-60 screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-16 md:text-7xl text-center">Our Team</h2>
        <div class="md:flex md:flex-wrap lg:grid lg:grid-cols-5 lg:gap-4 align-middle items-center justify-items-around justify-center">
          <card-profile
           imagePath="profile_pictures/alex_marley.jpg"
           name="Alex Marley"
           title="Founder" />
          <card-profile
           imagePath="profile_pictures/madyn_singh.jpeg"
           name="Madyn Singh"
           title="CMO" />
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
           title="Web Developer" />
        </div>
      </div>
      <div id="screen-footer" class="screen-full bg-black md:grid text-gray-300 md:grid-cols-2 lg:grid-cols-3">
        <div class="mb-6 md:mb-0">
          <iframe src="https://startop.substack.com/embed" width="400" height="130" class="-mb-10 -mx-12 -mt-6" style="background:transparent;" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="hidden lg:block">
          <img src="/banner.png" class="h-20 mx-auto w-auto" />
        </div>
        <div class="text-center md:text-right">
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="https://www.linkedin.com/company/thestartop/">linkedin</a>
          </div>
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="https://www.instagram.com/thestartop_/">instagram</a>
          </div>
          <div class="text-2xl mb-2">
            <a class="hover-border-b-2" href="https://startop.substack.com">newsletter</a>
          </div>
          <!-- <div class="text-2xl w-full mb-2">
            <a class="hover-border-b-2 text-gray-600" href="mailto:">email@coming.soon</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>
