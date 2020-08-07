import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api/v1/'

export default {
  fetchOffers() {
    return axios.get(`${ROOT_URL}/offers`)
  },
  fetchRetailers() {
    return axios.get(`${ROOT_URL}/retailers`)
  },
  registerView(id) {
    axios.patch(`${ROOT_URL}/offers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
