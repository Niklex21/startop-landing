<template>
    <div class="w-full md:max-w-sm overflow-hidden font-sans" >
        <div class="w-full">
            <NuxtLink :to="'/blog/article/' + id">
                <img v-if="imagePreview == 'default.jpg'" class="rounded-md hover:opacity-80" :src="require(`~/assets/images/${imagePreview}`)" alt="Image Preview" />
                <cld-image v-else class="hover:opacity-80 w-full h-full" style="border-radius: 0.375rem;" crop="fill" quality="auto" loading="lazy" :public-id="imagePreview" alt="Image Preview">
                    <cld-placeholder type="pixelate" />
                </cld-image>
            </NuxtLink>
        </div>
      <div class="mt-4">
        <!-- Desktop version -->
        <div class="flex flex-row text-lg opacity-80 mb-2">
            <span>{{ $moment(datePublished).format("MMMM DD, YYYY") }}</span>
            <span class="mx-auto"></span>
            <span>By <NuxtLink :to="'/blog/author/' + author.id" class="hover-border-b-2">{{ author.firstname }} {{ author.lastname }}</NuxtLink></span>
        </div>
        <div class="text-2xl font-bold mb-1">
            <NuxtLink :to="'/blog/article/' + id" class="hover:text-red-main">{{ textTitle }}</NuxtLink>
        </div>
        <div class="text-lg mb-3">
            {{ textPreview }}
        </div>
        <div class="flex flex-row text-lg font-bold opacity-80">
            <span v-for="category in categories" :key="category.id" class="mr-2 mb-2 text-red-main">
                    <a href="#" class="hover-border-b-2">#{{ category.name }}</a>
            </span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            textTitle: {
                type: String,
                default: 'Title'
            },
            textPreview: {
                type: String,
                default: 'Summary'
            },
            imagePreview: {
                type: String,
                default: 'default.jpg'
            },
            author: {
                type: Object
            },
            categories: {
                type: Array,
                default: []
            },
            datePublished: {
                type: String
            },
            id: {
                type: String
            },
        }
    }
</script>
