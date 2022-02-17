<template>
  <div id="app">
    <MovieList 
      :list='moviesList'
      @changePoster="onChangePoster"
    />
    <PosterBg
      :poster="posterBg"
      />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import MovieList from '@/components/MovieList.vue';
import PosterBg from '@/components/PosterBg.vue';
export default {
  components: {
    MovieList,
    PosterBg
  },
  data: () => ({
    posterBg: ""
  }),
  methods: {
    ...mapActions({
      movies: 'movies/fetchMovies'
    }),
    setMovies() {
      this.page += 1;
      this.movies(this.POP_URL + this.page);
      console.log(this.page)
    },
    onChangePoster(url) {
      this.posterBg = this.IMG_URL + url,
      console.log(this.posterBg)
    }
  },
  computed: {
      ...mapState({
        POP_URL: state => state.url.POP_URL,
        IMG_URL: state => state.url.IMG_URL,
        page: state => state.movies.page,
        movieList: state => state.movies.movieList,
      }),
      ...mapGetters({
        moviesList: 'movies/moviesList'
      })
      
  },
  mounted() {
    this.movies(this.POP_URL + this.page);
  }
}
</script>

<style lang="scss">
  #app {
    position: relative;
    min-height: 1200px;
    font-family: Arial, sans-serif;
    padding-top: 20px;
  }
</style>
