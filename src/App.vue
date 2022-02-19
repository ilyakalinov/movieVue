<template>
  <div id="app">
    <Header/>
    <Loader />
    <MovieList 
      :list='moviesList'
      @changePoster="onChangePoster"
    />
    <PosterBg
      :poster="posterBg"
    />
    <Pagination
      :current-page="currentPage"
      @pageChanged="onPageChanged"
    />
    <InfoModal/>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import MovieList from '@/components/MovieList.vue';
import PosterBg from '@/components/PosterBg.vue';
import Pagination from '@/components/Pagination.vue';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import InfoModal from '@/components/InfoModal'
export default {
  components: {
    MovieList,
    PosterBg,
    Pagination,
    Loader,
    Header,
    InfoModal
  },
  data: () => ({
    posterBg: ""
  }),
  methods: {
    ...mapActions({
      changeCurrentPage: 'movies/changeCurrentPage',
      searcMovies: 'movies/searcMovies',
    }),
    setMovies() {
      this.page += 1;
      this.movies(this.POP_URL + this.page);
    },
    onChangePoster(url) {
      this.posterBg = this.IMG_URL + url;
    },
    onPageChanged(page) {
      //смена номера страницы в строке состояния 
      this.$router.push({ query: { page }});
      //
      this.changeCurrentPage(page)
    },
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page))
    }
  },
  computed: {
      ...mapState({
        POP_URL: state => state.url.POP_URL,
        IMG_URL: state => state.url.IMG_URL,
        page: state => state.movies.page,
        movieList: state => state.movies.movieList,
        searchValue: state => state.movies.searchValue
      }),
      ...mapGetters({
        moviesList: 'movies/moviesList',
        currentPage: 'movies/currentPage'
      })
      
  },
  mounted() {
      this.changeCurrentPage(this.page);
  },
  watch: {
    '$route.query': {
      handler: 'onPageQueryChange',
      immediate: true,
      deep: true,
    }
  }
}
</script>

<style lang="scss">
  #app {
    position: relative;
    min-height: 1200px;
    font-family: Arial, sans-serif;
    padding-top: 20px;
    padding-bottom: 30px;
  }
</style>
