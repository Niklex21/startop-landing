<template>
    <div id="header" class="flex content-center justify-center items-center md:content-start md:justify-items-start md:justify-between md:items-start w-full h-auto">
        <NuxtLink to="/">
            <img class="block mx-auto lg:hidden h-28 md:h-40" src="/logo.png" alt="logo" />
            <img class="hidden lg:block h-20" src="/banner.png" alt="banner" />
        </NuxtLink>
        <nav class="hidden uppercase font-medium h-20 lg:flex text-right items-center text-3xl">
            <div class="h-auto w-auto">
                <a class="m-2 font-bold hover-border-b-2" href="https://startop.substack.com">newsletter</a>
                <NuxtLink class="m-2 hover-border-b-2" to="/">home</NuxtLink>
                <NuxtLink class="m-2 hover-border-b-2" to="/blog">blog</NuxtLink>
            </div>
        </nav>
    </div>
</template>