<template>
    <div id="header" class="flex content-center mx-auto justify-center items-center lg:content-start lg:justify-items-start lg:justify-between lg:items-start w-full h-auto">
        <NuxtLink to="/">
            <img class="mx-auto block lg:hidden h-28 md:h-40" src="/logo.png" alt="logo" />
            <img class="hidden lg:block h-20" src="/banner.png" alt="banner" />
        </NuxtLink>
        <nav class="hidden uppercase font-medium h-20 lg:flex text-right items-center text-3xl">
            <div class="h-auto w-auto">
                <a id="newsletter" class="m-2 font-bold hover-full-opacity" href="https://startop.substack.com">newsletter</a>
                <NuxtLink v-if="activeLink != 'home'" id="home" class="m-2 hover-full-opacity" to="/">home</NuxtLink>
                <span v-else class="m-2">home</span>
                <NuxtLink v-if="activeLink != 'blog'" id="blog" :class="'m-2 hover-full-opacity ' + {active: activeLink == 'blog'}" to="/blog">blog</NuxtLink>
                <span v-else class="m-2">blog</span>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            activeLink: {
                type: String,
                validator: (value) => {
                    return ['home', 'blog'].indexOf(value) !== -1
                }
            }
        }
    }
</script>