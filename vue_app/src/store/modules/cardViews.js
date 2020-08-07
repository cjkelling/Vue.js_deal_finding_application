const state = {
  gallery: true,
  offerId: null
};

const getters = {
  getGalleryView: state => state.gallery,
  getOfferId: state => state.offerId
};

const actions = {
  updateGallery({ commit }, gallery) {
    commit("setGallery", gallery);
  },
  updateOfferId({ commit }, offerId) {
    commit("setOfferId", offerId);
  }
};

const mutations = {
  setGallery: (state, gallery) => {
    state.gallery = gallery;
  },
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
