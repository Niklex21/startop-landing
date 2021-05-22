<template>
    
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
            imagePreview: {
                type: Image,
            },
            author: {
                type: String,
                default: 'Author'
            },
            link: {
                type: String,
                default: 'Link'
            },
            datePublished: {
                type: Date
            }
        }
    })
</script>
