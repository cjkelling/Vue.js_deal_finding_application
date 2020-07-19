import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import ApiService from '@/components/ApiService.vue';

const localVue = createLocalVue()
const axios = require('axios');

jest.mock('axios');
localVue.use(Vuex)

describe("ApiService.vue", () => {
  let state
  let store

  beforeEach(() => {
    state = {
      endpoint: 'http://localhost:3000/api/v1/offers',
      errors: [],
      offers: []
    }
    store = new Vuex.Store({
      state
    })
  })

  it('returns the offer data', async () => {
    const wrapper = mount(ApiService, { store, localVue });
    expect(store.state.offers.length).toEqual(0)

    apiCall = axios.get.mockResolvedValue({
      data: [
        { id: 1284,
          name: 'Heavy',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
        },
        { id: 1234,
          name: 'Medium',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
        },
        { id: 5678,
          name: 'Medium Too',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
        }
      ]
    });

    await apiCall;

    expect(store.state.offers.length).toEqual(3)
  })
})
