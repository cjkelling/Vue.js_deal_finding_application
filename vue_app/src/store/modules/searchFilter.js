const state = {
  filters: [],
  search: '',
  showRetailers: false
};

const getters = {
  getFilters: state => state.filters,
  getSearch: state => state.search,
  getShowRetailers: state => state.showRetailers
};

const actions = {
  addToFilter({ commit }, retailer) {
    commit("addToFilter", retailer);
  },
  removeFromFilter({ commit }, retailer) {
    commit("removeFromFilter", retailer)
  },
  resetFilter({ commit }) {
    commit("resetFilter")
  },
  updateSearch({ commit }, search) {
    commit("setSearch", search);
  },
  updateShowRetailers({ commit }) {
    commit('setShowRetailers');
  },
  resetShowRetailers({ commit }) {
    commit('resetShowRetailers');
  }
};

const mutations = {
  addToFilter: (state, retailer) => {
    state.filters = [...state.filters, retailer];
  },
  removeFromFilter: (state, retailer) => {
    state.filters = state.filters.filter(filteredRetailer => filteredRetailer != retailer);
  },
  resetFilter: (state) => {
    state.filters = [];
  },
  setSearch: (state, search) => {
    state.search = search;
  },
  setShowRetailers: (state) => {
    state.showRetailers = !state.showRetailers;
  },
  resetShowRetailers: (state) => {
    state.showRetailers = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
