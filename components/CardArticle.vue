<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="" alt="Image Preview">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ textTitle }}</div>
        <p class="text-gray-700 text-base">
            {{ textPreview }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fintech</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ai</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#agrotech</span>
      </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            textTitle: {
                type: String,
                default: 'Title'
            },
            textPreview: {
                type: String,
                default: 'Summary'
            },
            // imagePreview: {
            //     type: String,
            //     default: ''
            // },
            author: {
                type: String,
                default: 'Author'
            },
            // link: {
            //     type: String,
            //     default: 'Link'
            // },
            // datePublished: {
            //     type: Date
            // }
        }
    })
</script>
