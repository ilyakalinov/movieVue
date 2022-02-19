<template>
    <b-container class="movie__list">
        <b-row>
            <template v-if='list.length > 0'>
                <b-col cols="3" v-for="(movie) in list" :key="movie.id">
                    <MovieItem 
                        :movie="movie" 
                        @mouseover.native="onMouseOver(movie.poster_path)"
                        @removeItem="onRemoveItem"
                    />
                </b-col>
            </template>
            <template v-else>
                <div class="empty">
                    Empry list
                </div>
            </template>
        </b-row>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex'
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
        },
        async onRemoveItem({id, title}) {
            const isConfirmed = await this.$bvModal.msgBoxConfirm(`Are you sure delete ${title}?`);
            if(isConfirmed) {
                this.removeMovie(id);
            }
        },
        ...mapActions({
            removeMovie: 'movies/removeMovie'
        })
    }
}
</script>

<style lang="scss" scoped>
    .movie__list {
        padding-bottom: 20px;
        margin-top: 30px;
    }
    .list__title{
        position: relative;
        font-size: 50px;
        margin-bottom: 30px;
        color: #fff;
    }
    .empty {
        font-size: 35px;
        min-height: 300px;
        color: red;
        text-align: center;
    }
</style>