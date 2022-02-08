import Vue from 'vue'
import Vuex from 'vuex'
import propiedades from './modules/propiedades'
import VuexPersist from 'vuex-persist'
Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'keyCash',
  storage: window.localStorage

})
const initialState = {
  propiedades:propiedades.state
}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [
    vuexPersist.plugin
  ],
  modules: {
    propiedades:propiedades
  },
})
