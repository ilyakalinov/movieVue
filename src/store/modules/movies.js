import axios from "@/plugins/axios";

const moviesStore = {
    namespaced: true,
    state: {
        page: 1,
        movieList: {},
        searchValue: '',
        infoId: 0,
        infoMovie: {}
    },
    getters: {
        currentPage: ({ page }) => page,
        moviesList: ({movieList}) => movieList,
    },
    mutations: {
        setMovies(state, movies) {
            state.movieList = movies;
        },
        currentPage(state, value) {
            state.page = value;
        },
        removeMovie(state, index){
            state.movieList.splice(index, 1)
        },
        setSearch(state, value) {
            state.searchValue = value
        },
        setIdInfo(state, id) {
            state.infoId = id;
        },
        setInfo(state, value) {
            state.infoMovie = value
        }
    },
    actions: {
        async fetchMovies({commit, dispatch}, page) {
            try {
                dispatch('loader/toggleLoader', true, {root: true})
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=84dadd31473be27d40ab4886ee4c7978&page=' + page)
                commit('setMovies', response.data.results)
                // console.log(response.data.results)
            } catch(e) {
                console.log(e)
            } finally {
                dispatch('loader/toggleLoader', false, {root: true})
            }
        },
        async changeCurrentPage({commit, dispatch}, page) {
            try {
                dispatch('fetchMovies', page);
                commit('currentPage', page);
            } catch(e) {
                console.log(e)
            }
        },
        async searcMovies({commit, dispatch}, query) {
            try {
                dispatch('loader/toggleLoader', true, {root: true})
                const searchResults = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&query=${query}&page=`)
                commit('setMovies', searchResults.data.results)
                console.log(searchResults.data.results)
            } catch(e) {
                console.log(e)
            } finally {
                dispatch('loader/toggleLoader', false, {root: true})
            }
        },
        async infoMovies({commit, dispatch}, id) {
            try {
                const info = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=84dadd31473be27d40ab4886ee4c7978`)
                commit('setInfo', info.data)
                console.log(info.data)
            } catch(e) {
                console.log(e)
            } finally {
                dispatch('loader/toggleLoader', false, {root: true})
            }
        },
        removeMovie({commit, state}, id) {
            const index = state.movieList.findIndex(item => item.id === id);
            if(index != -1) {
                commit('removeMovie', index);
                this.fetchMovies;
            }
        }
    },
    updated() {
        console.log('movie update')
    }
};

export default moviesStore;