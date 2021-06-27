<template>
    <LoadingScreen v-if="loading" />
    <div v-else class="text-red-main font-futura-pt absolute top-0 w-full">
        <div class="screen-full">
            <MainNavBar activeLink="blog" />
        </div>
        <div class="screen-full">
            <div v-if="error">
                {{ error }}
            </div>
            <div v-else class="content-center mx-auto text-gray-800 flex flex-wrap md:flex-row flex-col justify-center">
                <span class="mb-20 text-5xl md:text-6xl lg:text-7xl flex w-full content-center font-bold text-red-main">
                    <p class="flex text-center mx-auto">Our blog</p>
                </span>
                <div v-for="article in articles" :key="article.id" class="mx-10 mb-12 w-full md:w-auto">
                    <CardArticle
                        :id="article.id"
                        :textTitle="article.title"
                        :textPreview="article.summary"
                        :author="article.author"
                        :categories="article.categories"
                        :datePublished="article.published_at"
                        :imagePreview="article.preview_picture != null ? article.preview_picture.hash + article.preview_picture.ext : 'default.jpg'" />
                </div>
            </div>
        </div>
        <LazyFooter />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                articles: [],
                error: null,
                loading: true
            }
        },
        async mounted () {
            try {
                this.articles = (await this.$strapi.$articles.find()).reverse()
                this.loading = false
            } catch (error) {
                this.error = error
                this.loading = false
            }
        }
    }
</script>