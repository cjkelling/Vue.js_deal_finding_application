import services from "../../services/api";
import router from "../../router/index";

const state = {
  offers: [],
  retailers: []
};

const getters = {
  allOffers: state => state.offers,
  allRetailers: state => state.retailers
};

const actions = {
  async fetchOffers({ commit }) {
    console.log(router);
    const response = await services.fetchOffers();
    commit("setOffers", response.data);
  },
  async fetchRetailers({ commit }) {
    const response = await services.fetchRetailers();
    commit("setRetailers", response.data);
    router.push("/gallery");
  }
};

const mutations = {
  setOffers: (state, offers) => {
    state.offers = offers;
  },
  setRetailers: (state, retailers) => {
    state.retailers = retailers;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
