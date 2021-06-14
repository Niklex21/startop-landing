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
                    <span class="text-5xl font-bold mb-2 text-red-main">#{{ category.name }}</span>
                </div>
            </div>
            <div class="screen-full">
                <div class="content-center mx-auto text-gray-800 flex flex-wrap md:flex-row flex-col justify-center">
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
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                category: {},
                articles: [],
                error: null,
                loading: true
            }
        },
        async mounted () {
            try {
                this.category = (await this.$strapi.$categories.findOne(this.$route.params.slug))
                this.articles = (await Promise.all(this.category.articles.map(article => this.$strapi.$articles.findOne(article.id)))).reverse()
                console.log(this.articles)
                this.loading = false
            } catch (error) {
                this.error = error
                this.loading = false
            }
        }
    }
</script>