import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import FilterMenu from '@/components/FilterMenu.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("FilterMenu.vue", () => {
  let state
  let store

  beforeEach(() => {
    state = {
      endpoint: 'http://localhost:3000/api/v1/offers',
      errors: [],
      filters: [],
      gallery: true,
      offerId: null,
      offers: [
        { id: 1284,
          name: 'Heavy',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
          retailers: [{name: 'Walmart'}]
        },
        { id: 1234,
          name: 'Medium',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
          retailers: [{name: 'Walmart'}]
        },
        { id: 5678,
          name: 'Medium Too',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
          retailers: [{name: 'Publix'}]
        }
      ],
      retailerList: [],
      search: '',
      showRetailers: false
    }
    store = new Vuex.Store({
      state
    })
  })

  test("it shows on the page if in gallery view", () => {
    const wrapper = mount(FilterMenu, { store, localVue });
    expect(wrapper.findAll('.filterMenu').length).toEqual(1)
  })

  test("it does not show on the page if in detailed view", () => {
    store.state.gallery = false;
    const wrapper = mount(FilterMenu, { store, localVue });
    expect(wrapper.findAll('.filterMenu').length).toEqual(0)
  })

  test("checkboxes show if 'showRetailers' button is pressed", () => {
    let wrapper = mount(FilterMenu, { store, localVue });
    expect(wrapper.findAll('input').length).toEqual(0)
    wrapper.find('button').trigger('click')
    expect(store.state.showRetailers).toEqual(true)
    wrapper = mount(FilterMenu, { store, localVue });
    expect(wrapper.findAll('label').length).toEqual(2)
  })
})
