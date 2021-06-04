<template>
    <div class="max-w-md overflow-hidden font-sans mb-10 mr-10" >
      <NuxtLink :to="'/article/' + id">
          <img class="w-full rounded-md hover:opacity-80" :src="require(`~/assets/images/${imagePreview}`)" alt="Image Preview">
      </NuxtLink>
      <div class="mt-4">
        <div class="flex flex-row text-lg opacity-80 mb-2">
            <span>{{ $moment(datePublished).format("MMMM DD, YYYY") }}</span>
            <span class="mx-auto"></span>
            <span>By <NuxtLink :to="'/author/' + author.id" class="hover-border-b-2">{{ author.firstname }} {{ author.lastname }}</NuxtLink></span>
        </div>
        <div class="text-3xl font-semibold mb-1">
            <NuxtLink :to="'/article/' + id" class="hover:text-red-main">{{ textTitle }}</NuxtLink>
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
