<template>
    <div class="text-red-main font-futura-pt absolute top-0 w-full">
        <div class="screen-full">
            <MainNavBar activeLink="blog" />
        </div>
        <div class="screen-full">
            <div v-if="error">
                {{ error }}
            </div>
            <div v-else class="content-center mx-auto text-gray-800 flex flex-wrap md:flex-row flex-col justify-center">
                <div v-for="article in articles" :key="article.id" class="mx-10 mb-12 w-full md:w-auto">
                    <CardArticle
                        v-bind:id="article.id"
                        v-bind:textTitle="article.title"
                        v-bind:textPreview="article.summary"
                        v-bind:author="article.author"
                        v-bind:categories="article.categories"
                        v-bind:datePublished="article.published_at"
                        v-bind:imagePreview="article.preview_picture != null ? article.preview_picture.hash + article.preview_picture.ext : 'default.jpg'" />
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
                error: null
            }
        },
        async mounted () {
            try {
                this.articles = (await this.$strapi.$articles.find()).reverse()
            } catch (error) {
                this.error = error
            }
        }
    }
</script>