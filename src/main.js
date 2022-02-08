import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCurrencyFilter from "vue-currency-filter"
import * as VueGoogleMaps from 'vue2-google-maps'
import VueEasyLightbox from 'vue-easy-lightbox'
Vue.use(VueEasyLightbox)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCgEI9JLIJqcF64IydR8xXjB8oxPuusVvI',
    libraries: 'places',
  }
});
Vue.config.productionTip = false
Vue.use(VueCurrencyFilter, {
  symbol: "R$",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
