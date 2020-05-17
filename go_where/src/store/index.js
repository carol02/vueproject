import Vue from 'vue'
import Vuex from 'vuex'
import all from './modules/all'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    all
  },
  getters
})
