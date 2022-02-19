const loaderStore = {
    namespaced: true,
    state: {
        isShowLoad: false,
    },
    getters: {
        isShowLoad: ({ isShowLoad }) => isShowLoad
    },
    mutations: {
        toggleLoader(state, bool) {
            state.isShowLoad = bool
        }
    },
    actions: {
        toggleLoader({ commit }, bool) {
            commit('toggleLoader', bool)
        }
    }
}
export default loaderStore