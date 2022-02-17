<template>
    <b-container>
        <h3 class="list__title">IMDB Top</h3>
        <b-row>
            <template v-if='list.length > 0'>
                <b-col cols="3" v-for="(movie) in list" :key="movie.id">
                    <MovieItem 
                        :movie="movie" 
                        @mouseover.native="onMouseOver(movie.poster_path)"
                    />
                </b-col>
            </template>
            <template v-else>
                <div class="empty">
                    Empty List
                </div>
            </template>
        </b-row>
    </b-container>
</template>

<script>
import MovieItem from '@/components/MovieItem'
export default {
    name: 'MovieList',
    components: {
        MovieItem,
    },
    props: {
        list: {
            type: Array,
            default: () => ({})
        },
    },
    methods: {
        onMouseOver(poster) {
            this.$emit('changePoster', poster)
        }
    }
}
</script>

<style lang="scss" scoped>
    .list__title{
        position: relative;
        font-size: 50px;
        margin-bottom: 30px;
        color: #fff;
    }
    .empty {
        font-size: 35px;
        color: red;
        text-align: center;
    }
</style>