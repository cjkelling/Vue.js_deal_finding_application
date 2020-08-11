const state = {
  offerId: null
};

const getters = {
  getOfferId: state => state.offerId
};

const actions = {
  updateOfferId({ commit }, offerId) {
    commit("setOfferId", offerId);
  }
};

const mutations = {
  setOfferId: (state, offerId) => {
    state.offerId = offerId;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
