import Vue from 'vue';
import Vuex from 'vuex';
import apiCalls from './modules/apiCalls';
import offerCardDetailed from './modules/offerCardDetailed';
import searchFilter from './modules/searchFilter';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiCalls,
    offerCardDetailed,
    searchFilter
  },
  state: {
    errors: []
  }
})
