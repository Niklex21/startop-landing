<template>
    <div class="text-red-main font-futura-pt">
        <div class="absolute top-0 w-full">
            <div class="screen-full">
                <MainNavBar />
            </div>
            <div class="screen-full">
                <div id="blog-main">
                    <div v-if="error">
                        {{ error }}
                    </div>
                    <div v-else class="content-center flex flex-wrap gap-12 md:flex-row flex-col">
                        <div v-for="article in articles" :key="article.id">
                            <CardArticle
                                v-bind:textTitle="article.title"
                                v-bind:textPreview="article.summary"
                                v-bind:author="article.author"
                                v-bind:categories="article.categories"
                                v-bind:datePublished="article.published_at" />
                        </div>
                    </div>
                </div>
            </div>
            <LazyFooter />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
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