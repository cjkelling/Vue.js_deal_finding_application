import Vue from 'vue';
import Vuex from 'vuex';
import apiCalls from './modules/apiCalls';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiCalls
  },
  state: {
    errors: [],
    filters: [],
    gallery: true,
    offerId: null,
    retailerList: [],
    search: '',
    showRetailers: false
  }
})
