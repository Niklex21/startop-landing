<template>
    <div class="text-red-main font-futura-pt absolute top-0 w-full">
        <div class="screen-full">
            <MainNavBar />
        </div>
        <div class="screen-full">
            <div v-if="error">
                {{ error }}
            </div>
            <div v-else class="content-center mx-auto text-gray-800 flex flex-wrap md:flex-row-reverse flex-col-reverse">
                <div v-for="article in articles" :key="article.id">
                    <CardArticle
                        v-bind:id="article.id"
                        v-bind:textTitle="article.title"
                        v-bind:textPreview="article.summary"
                        v-bind:author="article.author"
                        v-bind:categories="article.categories"
                        v-bind:datePublished="article.published_at" />
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
                this.articles = await this.$strapi.$articles.find()
            } catch (error) {
                this.error = error
            }
        }
    }
</script>