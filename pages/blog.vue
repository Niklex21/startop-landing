<template>
    <div class="text-red-main font-futura-pt">
        <div class="absolute top-0 w-full">
            <div class="screen-full">
                <MainNavBar />
                <div id="blog-main" class="align-middle items-center flex flex-wrap">
                    <div v-if="error">
                        {{ error }}
                    </div>
                    <ul v-else>
                        <li v-for="article in articles" :key="article.id">
                            <CardArticle
                                v-bind:textTitle="article.title"
                                v-bind:textPreview="article.summary" />
                        </li>
                    </ul>
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