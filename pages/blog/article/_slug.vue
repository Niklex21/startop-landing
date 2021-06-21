<template>
    <LoadingScreen v-if="loading" />
    <div v-else>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-else class="font-sans text-base">
            <div class="screen-full text-red-main font-futura-pt">
                <MainNavBar />
            </div>
            <div class="screen-full">
                <div class="text-gray-800"> <!-- everything has to be wrapped in a single div -->
                    <div class="prose-size mb-8 mx-auto">
                        <div class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-red-main w-full mb-8">{{ article.title }}</div>
                        <div class="text-base md:text-lg lg:text-xl xl:text-2xl w-full text-gray-400 mb-8">
                            <span>
                                <NuxtLink :to="'/blog/author/' + article.author.id" class="font-semibold underline md:no-underline text-gray-800 md:text-gray-400 hover:text-gray-800">{{ article.author.firstname }} {{ article.author.lastname }}</NuxtLink>
                                on {{ $moment(article.published_at).format("MMM DD, YYYY") }}
                            </span>
                            &#183; <!-- Do not remove, needed -->
                            <span>{{ article.estimatedReadTime }} min read</span>
                        </div>
                        <img v-if="article.preview_picture == null" class="w-full mb-8" :src="require(`~/assets/images/default.jpg`)" alt="Image Preview">
                        <cld-image v-else class="w-full mb-8" loading="lazy" :public-id="article.preview_picture.hash + article.preview_picture.ext" alt="Image Preview">
                            <cld-placeholder type="pixelate" />
                        </cld-image>
                        <article v-html="$md.render(article.content)" class="prose prose-red md:prose lg:prose-lg xl:prose-2xl mb-8">
                        </article>
                    </div>
                    <div class="text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-8 flex flex-row">
                        <span v-for="category in article.categories" :key="category.id">
                            <NuxtLink :to="'/blog/category/' + category.id">
                                <span class="mr-2 mb-2 rounded-sm md:opacity-60 hover:opacity-100 bg-gray-200 px-3 py-1">
                                    {{ category.name }}
                                </span>
                            </NuxtLink>
                        </span>
                    </div>
                    <hr class="mb-8">
                    <div class="text-base md:text-lg lg:text-xl xl:text-2xl flex flex-row text-gray-400">
                        Written by&nbsp;
                        <NuxtLink :to="'/blog/author/' + article.author.id" class="text-gray-800 md:text-gray-400 underline md:no-underline hover:text-gray-800">
                            {{ article.author.firstname }} {{ article.author.lastname }}
                        </NuxtLink>
                        &nbsp;on {{ $moment(article.published_at).format("MMMM DD, YYYY") }}
                    </div>
                </div>
            </div>
            <LazyFooter />
        </div>
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
                this.article = (await this.$strapi.$articles.findOne(this.$route.params.slug))
                this.article.estimatedReadTime = getReadingTime(this.article.content)
                this.loading = false
            } catch (error) {
                this.error = error
                this.loading = false
            }
        }
    }
</script>