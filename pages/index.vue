<template>
  <div class="text-red-main font-futura-pt">
    <div id="background" class="fixed top-0 w-screen overflow-hidden bg-no-repeat bg-center bg-fixed h-screen" style="background-image: url('/index_bg_1.jpg');">
        <div class="absolute top-0 h-screen bg-fixed w-screen bg-black bg-opacity-70"></div>
    </div>
    <div class="absolute top-0 w-full">
      <div id="screen-1" class="screen-screen">
        <MainNavBar /> <!--- TODO #106 -->
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
          <div class="mb-8"><h1 class="w-full font-bold text-6xl md:text-8xl">The Boston Startup Newsletter</h1></div>
          <div><h3 class="w-full font-normal text-2xl md:text-4xl">A bi-weekly newsletter containing curated entrepreneurial focused content for students, founders and friends.</h3></div>
        </div>
        <div id="subscription-form" class="lg:hidden w-full overflow-hidden mx-auto flex flex-col content-center justify-center items-center">
          <iframe src="https://startop.substack.com/embed" width="400" height="120" class="-mb-2 overflow-hidden" style="background:transparent;" frameborder="0" scrolling="no"></iframe>
          <span class="w-full text-center text-2xl md:text-4xl italic">... or you can read it <a class="underline" href="https://startop.substack.com/">here</a>!</span>
        </div>
      </div>
      <div id="screen-2" class="bg-black bg-opacity-60 screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-24 md:text-7xl text-center">Why Subscribe?</h2>
        <div class="md:grid md:grid-cols-2 md:gap-8 md:gap-x-12 text-3xl align-middle items-center justify-items-around">
          <CardFeature
                titleText="Follow the Trends"
                mainText="Learn about 10 to 15 of the most innovative startups in the Boston community every two weeks."
                imagePath="icons/trend.svg" />
          <CardFeature
                titleText="Job Opportunities"
                mainText="Gain exposure to internships and job opportunities with the early-stage startups."
                imagePath="icons/work.svg" />
          <CardFeature
                titleText="Join the Community"
                mainText="Get a curated list of the entrepreneurial events taking place in Boston every two weeks."
                imagePath="icons/idea.svg" />
          <CardFeature
                titleText="Become Involved"
                mainText="Engage with founders and innovators shaping the future of Boston and the world."
                imagePath="icons/user_group.svg" />
        </div>
      </div>
      <div id="screen-3" class="bg-black bg-opacity-60 screen-full">
        <h2 class="w-full font-bold text-5xl mb-4 md:mb-16 md:text-7xl text-center">Our Team</h2>
        <div class="md:flex md:flex-wrap lg:grid lg:grid-cols-5 lg:gap-4 align-middle items-center justify-items-around justify-center">
          <CardProfile
           imagePath="profile_pictures/alex_marley.jpg"
           name="Alex Marley"
           title="Founder" />
          <CardProfile
           imagePath="profile_pictures/madyn_singh.jpeg"
           name="Madyn Singh"
           title="CMO" />
          <CardProfile
           imagePath="profile_pictures/nina.jpg"
           name="Nina Miller"
           title="Graphic Designer" />
          <CardProfile
           imagePath="profile_pictures/nate.jpeg"
           name="Nate Peters"
           title="Venture Director" />
          <CardProfile
           imagePath="profile_pictures/alex.jpg"
           name="Alex Nikanov"
           title="Web Developer" />
        </div>
      </div>
      <LazyFooter />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});
</script>
