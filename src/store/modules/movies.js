import axios from "@/plugins/axios";

const moviesStore = {
    namespaced: true,
    state: {
        page: 1,
        movieList: {},
    },
    getters: {
        currentPage: ({ page }) => page,
        moviesList: ({movieList}) => movieList,
    },
    mutations: {
        setMovies(state, movies) {
            state.movieList = movies
        }
    },
    actions: {
        async fetchMovies({commit}, URL) {
            try {
                const response = await axios.get(URL)
                commit('setMovies', response.data.results)
                console.log(response.data.results)
            } catch(e) {
                console.log(e)
            }
        }
    },
    updated() {
        console.log('movie update')
    }
};

export default moviesStore;