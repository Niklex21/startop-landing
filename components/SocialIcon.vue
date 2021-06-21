<template>
    <a :href="link" class="text-current opacity-100 mx-3 hover:text-white hover:opacity-80" >
        <font-awesome-icon :icon="[iconSet, iconName]" />
    </a>
</template>

<script>
export default {
    props: {
        // The fontawesome icon set
        iconSet: {
            type: String,
            default: 'fab'
        },
        // The icon name
        iconName: {
            type: String
        },
        link: {
            type: String
        }
    }
}
</script>
