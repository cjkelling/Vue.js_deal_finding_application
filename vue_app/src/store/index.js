import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    endpoint: 'http://localhost:3000/api/v1/offers',
    errors: [],
    filters: [],
    gallery: true,
    offerId: null,
    offers: [],
    retailerList: [],
    search: '',
    showRetailers: false
  }
})
