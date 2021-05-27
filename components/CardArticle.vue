<template>
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img class="w-full" :src="require(`~/assets/images/${imagePreview}`)" alt="Image Preview">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ textTitle }}</div>
        <p class="font-medium text-lg mb-1">
            Published on {{ datePublished }} by {{ author.firstname }} {{ author.lastname }}
        </p>
        <p class="text-gray-700 text-base">
            {{ textPreview }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2" v-for="category in categories" :key="category.id">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ category.name }}</span>
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
            link: {
                type: String,
                default: 'Link'
            },
        }
    }
</script>
