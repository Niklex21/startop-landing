<template>
    <div class="flex my-5 md:m-0">
        <div class="flex flex-shrink items-center justify-center">
            <svg v-if="icon" :src="imagePath" class="rounded-md h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 overflow-hidden" />
            <img v-else :src="imagePath" class="rounded-md h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 overflow-hidden" />
        </div>
        <div class="flex-shrink ml-4">
            <dt class="font-bold text-current text-2xl md:text-3xl lg:text-5xl">{{ titleText }}</dt>
            <dd class="font-normal text-current text-base md:text-2xl lg:text-3xl">{{ mainText }}</dd>
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
            },
            icon: {
                type: Boolean,
                default: false
            }
        }
    })
</script>
