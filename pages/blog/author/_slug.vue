<template>
    <LoadingScreen v-if="loading" />
    <div v-else class="text-red-main font-futura-pt">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-else>
            <div class="screen-full text-red-main">
                <MainNavBar />
            </div>
            <div class="screen-full text-gray-800">
                <div class="flex flex-wrap lg:flex-nowrap flex-row content-center items-center">
                    <cld-image v-if="author.profile_picture" id="author_avatar" class="mb-8 lg:mr-8 lg:mb-0 flex" loading="lazy" :public-id="author.profile_picture.formats.small.provider_metadata.public_id" alt="Profile picture">
                        <cld-transformation aspectRatio="1" crop="crop" radius="max" />
                        <cld-placeholder type="pixelate" />
                    </cld-image>
                    <div id="author_description" class="w-full text-center lg:text-left flex flex-col content-center">
                        <span class="text-5xl font-bold flex flex-wrap mb-3 text-red-main">{{ author.firstname }} {{ author.lastname }}</span>
                        <span v-if="author.bio" class="text-3xl flex flex-wrap max-w-prose">{{ author.bio }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                author: {},
                error: null,
                loading: true
            }
        },
        async mounted () {
            try {
                this.author = (await this.$strapi.$authors.findOne(this.$route.params.slug))
                this.loading = false
            } catch (error) {
                this.error = error
                this.loading = false
            }
        }
    }
</script>