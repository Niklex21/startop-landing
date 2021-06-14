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
                <div class="flex flex-wrap lg:flex-nowrap flex-row items-center justify-center text-center">
                    <cld-image v-if="author.profile_picture" id="author_avatar" class="md:mr-8 mb-4 md:mb-0 flex" loading="lazy" :public-id="author.profile_picture.formats.thumbnail.provider_metadata.public_id" alt="Profile picture">
                        <cld-transformation aspectRatio="1" crop="crop" radius="max" />
                        <cld-placeholder type="pixelate" />
                    </cld-image>
                    <div id="author_description" class="flex flex-col lg:text-left content-center">
                        <span class="text-5xl font-bold mb-2 text-red-main">{{ author.firstname }} {{ author.lastname }}</span>
                        <span v-if="author.bio" class="text-3xl flex flex-wrap max-w-prose">{{ author.bio }}</span>
                    </div>
                </div>
            </div>
            <div class="screen-full">
                <div class="content-center mx-auto text-gray-800 flex flex-wrap md:flex-row flex-col justify-center">
                    <div v-for="article in author_articles" :key="article.id" class="mx-10 mb-12 w-full md:w-auto">
                        <CardArticle
                            :id="article.id"
                            :textTitle="article.title"
                            :textPreview="article.summary"
                            :author="author"
                            :categories="article.categories"
                            :datePublished="article.published_at"
                            :imagePreview="article.preview_picture != null ? article.preview_picture.hash + article.preview_picture.ext : 'default.jpg'" />
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
                author_articles: [],
                error: null,
                loading: true
            }
        },
        async mounted () {
            try {
                this.author = (await this.$strapi.$authors.findOne(this.$route.params.slug))
                // Doing this instead of this.author.articles as those don't have the full information (temporary fix)
                this.author_articles = (await this.$strapi.$articles.find()).filter(article => article.author.id == this.author.id).reverse()
                this.loading = false
            } catch (error) {
                this.error = error
                this.loading = false
            }
        }
    }
</script>