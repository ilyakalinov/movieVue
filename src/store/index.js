import Vue from 'vue'
import Vuex from 'vuex'
import movies from '@/store/modules/movies'
import url from '@/store/modules/url'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    movies,
    url
  }
});


export default store;
