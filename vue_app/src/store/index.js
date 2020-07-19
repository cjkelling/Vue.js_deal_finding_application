import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    offers: [],
    errors: [],
    gallery: true,
    offerId: null,
    search: '',
    endpoint: 'http://localhost:3000/api/v1/offers'
  }
})
