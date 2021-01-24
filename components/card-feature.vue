<template>
    <div class="flex my-5 md:mb-4 md:m-0">
        <div class="flex flex-shrink items-center justify-center text-current">
            <img :src="require(`~/assets/${imagePath}`)" class="stroke-current fill-current rounded-md h-24 w-24 overflow-hidden" />
        </div>
        <div class="flex-shrink max-w-prose ml-8 space-y-2">
            <dt class="font-bold text-current text-3xl md:text-4xl lg:text-5xl">{{ titleText }}</dt>
            <dd class="font-normal text-current text-xl md:text-2xl lg:text-3xl">{{ mainText }}</dd>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            imagePath: {
                type: String,
                default: ''
            },
            titleText: {
                type: String,
                default: 'Lorem ipsum doret'
            },
            mainText: {
                type: String,
                default: 'Lorem ipsum doret sim ma'
            }
        }
    })
</script>
