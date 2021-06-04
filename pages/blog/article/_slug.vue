<template>
    <div v-if="loading" class="text-5xl text-center my-auto font-bold text-red-main screen-screen">
        Loading...
    </div>
    <div v-else class="font-sans text-base absolute top-0 w-full">
        <div class="screen-full text-red-main font-futura-pt">
            <MainNavBar />
        </div>
        <div class="screen-full">
            <div class="text-gray-800">
                <div class="prose prose-sm md:prose-md lg:prose-lg xl:prose-2xl mb-8 mx-auto">
                    <div class="text-5xl font-bold text-red-main w-full mb-8">{{ article.title }}</div>
                    <div class="text-lg w-full flex text-gray-400 flex-row mb-8">
                        <span>
                            <NuxtLink :to="'/blog/author/' + article.author.id" class="font-semibold hover:text-gray-800">{{ article.author.firstname }} {{ article.author.lastname }}</NuxtLink>
                            on {{ $moment(article.published_at).format("MMMM DD, YYYY") }}
                        </span>
                        <!-- <span class="mx-auto"></span> -->
                        &nbsp;&#183;&nbsp; <!-- Do not remove, needed -->
                        <span>{{ article.estimatedReadTime }} min read</span>
                    </div>
                    <img class="w-full mb-8" :src="require(`~/assets/images/default.jpg`)" alt="Image Preview">
                    <article v-html="$md.render(article.content)" class="mb-8">
                    </article>
                </div>
                <div class="text-xl font-bold mb-8 flex flex-row">
                    <span v-for="category in article.categories" :key="category.id">
                        <NuxtLink to="#">
                            <span class="mr-2 mb-2 rounded-sm md:opacity-60 hover:opacity-100 bg-gray-200 px-3 py-1">
                                {{ category.name }}
                            </span>
                        </NuxtLink>
                    </span>
                </div>
            </div>
        </div>
        <LazyFooter />
    </div>
</template>

<script>
    import { getReadingTime } from '~/plugins/utils.js'

    export default {
        data () {
            return {
                article: {
                    estimatedReadTime: 0
                },
                error: null,
                loading: true
            }
        },
        async mounted () {
            try {
                this.article = (await this.$strapi.$articles.find({ id: this.$route.params.slug }))[0]
                this.article.estimatedReadTime = getReadingTime(this.article.content)
                this.loading = false
            } catch (error) {
                this.error = error
            }
        }
    }
</script>