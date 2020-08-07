import Vue from 'vue';
import Vuex from 'vuex';
import apiCalls from './modules/apiCalls';
import cardViews from './modules/cardViews';
import searchFilter from './modules/searchFilter';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiCalls,
    cardViews,
    searchFilter
  },
  state: {
    errors: []
  }
})
