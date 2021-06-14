<template>
    <figure class="rounded-xl p-8">
        <div 
            class="bg-center bg-no-repeat bg-cover hover:bg-white hover:bg-opacity-70 rounded-full h-36 w-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto aspect-w-48 aspect-h-48"
            :style="'background-image: url(' + require(`~/assets/images/${imagePath}`) + ');'">
        </div>
        <figcaption class="mt-6 text-center text-xl md:text-2xl">
            <div class="font-bold mb-2">
                {{ name }}
            </div>
            <div class="mb-4">
                {{ title }}
            </div>
            <!-- Social icons -->
            <div v-if="socials" class="flex flex-wrap justify-center space-x-6">
                <SocialIcon
                    v-if="socials.website"
                    iconSet="fas"
                    iconName="globe"
                    :link="socials.website" />

                <div v-for="(item, key, index) in socials" :key="index">
                    <SocialIcon
                        :iconName="key"
                        :link="item" />
                </div>
            </div>
        </figcaption>
    </figure>
</template>

<script>
    export default {
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
            },
            socials: {
                type: Object
            }
        }
    }
</script>
