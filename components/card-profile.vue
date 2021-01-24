<template>
    <figure class="rounded-xl p-8">
        <img class="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto" :src="require(`~/assets/images/${imagePath}`)"/>
        <figcaption class="pt-6 text-center space-y-2 text-xl md:text-2xl">
            <div class="font-extrabold">
                {{ name }}
            </div>
            <div class="font-medium">
                {{ title }}
            </div>
        </figcaption>
    </figure>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            imagePath: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        }
    })
</script>
