<template>
    <div id="header" class="flex content-center mx-auto justify-center items-center lg:content-start lg:justify-items-start lg:justify-between lg:items-start w-full h-auto">
        <!-- Desktop -->
        <nav class="hidden uppercase font-medium h-20 lg:flex top-0 w-full text-right text-3xl justify-between">
            <NuxtLink to="/" class="flex">
                <img class="h-20" src="/banner.png" alt="banner" />
            </NuxtLink>
            <div class="items-center flex font-semibold">
                <a id="newsletter" class="mr-6 border-2 border-red-main px-2 py-1 text-red-main hover:text-white hover:bg-red-main transition duration-200 ease-in-out" href="https://startop.substack.com">newsletter</a>
                <NuxtLink v-if="activeLink != 'home'" id="home" class="mr-6 hover-full-opacity" to="/">home</NuxtLink>
                <span v-else class="opacity-50 mr-6">home</span>
                <NuxtLink v-if="activeLink != 'blog'" id="blog" class="hover-full-opacity" to="/blog">blog</NuxtLink>
                <span v-else class="opacity-50">blog</span>
            </div>
        </nav>
        <!-- Mobile -->
        <nav class="w-full flex justify-between items-center h-20 lg:hidden">
            <NuxtLink to="/" class="-ml-4">
                <img class="w-auto h-20 md:h-24" src="/logo_no_text.png" alt="logo" />
            </NuxtLink>
            <MenuIcon v-on:click="toggleMenu" size="48" />
        </nav>
        <nav :class="'w-full h-full m-0 fixed z-50 top-0 p-8 content-center justify-center bg-white lg:hidden' + (menuActive ? '' : ' hidden')">
            <div class="w-full content-center items-center flex justify-between">
                <NuxtLink to="/" class="-ml-2">
                    <img class="w-auto h-20 md:h-24" src="/logo_no_text.png" alt="logo" />  
                </NuxtLink>
                <XIcon v-on:click="toggleMenu" size="48" />
            </div>
            <div class="w-full h-full mt-20">
                <div class="my-auto flex flex-wrap flex-col content-center font-bold space-y-6 text-center text-4xl uppercase">
                    <NuxtLink v-if="activeLink != 'home'" id="home" to="/">home</NuxtLink>
                    <span v-else class="opacity-50">home</span>
                    <NuxtLink v-if="activeLink != 'blog'" id="blog" to="/blog">blog</NuxtLink>
                    <span v-else class="opacity-50">blog</span>
                    <a id="newsletter" class="border-2 border-red-main px-2 py-1 text-white bg-red-main" href="https://startop.substack.com">newsletter</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { MenuIcon, XIcon } from "@vue-hero-icons/outline";

    export default {
        data: function () {
            return {
                menuActive: false,
            }
        },
        components: {
            MenuIcon, 
            XIcon
        },
        props: {
            activeLink: {
                type: String,
                validator: (value) => {
                    return ['home', 'blog'].indexOf(value) !== -1
                }
            }
        },
        methods: {
            toggleMenu: function () {
                this.menuActive = !this.menuActive
            },
        }
    }
</script>