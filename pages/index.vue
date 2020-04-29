<template>
    <div class="main">
        <h1>Daily Exercise</h1>
        <div class="container">
            <a
                v-for="(movie, index) in movies"
                :key="index"
                :href="movie.url"
                target="_blank"
                class="movieItem"
                @click.stop="onStop"
            >
                <div class="infoContainer">
                    <span class="title">{{ movie.title }}</span>
                    <span class="url">{{ movie.url }}</span>
                </div>
                <span
                    v-if="movie.isChecked"
                    class="checkButton material-icons"
                    @click.stop.prevent="onCheckButtonClicked(movie)"
                    >check_circle</span
                >
                <span
                    v-else
                    class="checkButton material-icons"
                    @click.stop.prevent="onCheckButtonClicked(movie)"
                    >check_circle_outline</span
                >
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Movie } from "~/types/entity"

export default Vue.extend({
    components: {},
    computed: {
        movies() {
            return this.$store.state.movies.items
        }
    },
    beforeMount() {
        this.$store.dispatch("movies/init")
    },
    methods: {
        onStop() {
            // no-op
        },
        onCheckButtonClicked(movie: Movie) {
            this.$store.dispatch("movies/updateCheckState", {
                id: movie.id,
                isChecked: !movie.isChecked
            })
        }
    }
})
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'

.main
    max-width 900px
    margin 0 auto
    padding 20px

    h1
        text-align center

    .movieItem
        display flex
        align-items center
        padding 16px 10px
        border-bottom 1px $gray_ccc solid

        .infoContainer
            flex 1

            span
                display block

            .title
                font-weight $font_weight_bold

            .url
                color $gray_888
                font-size 1.2rem
                margin-top 4px

        .checkButton
            font-size 3.2rem
            padding 10px

        &:first-child
            margin-top 40px

        &:last-child
            border-bottom none
</style>
