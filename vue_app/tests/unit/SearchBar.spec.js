import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import SearchBar from '@/components/SearchBar.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("SearchBar.vue", () => {
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
          image_url: 'http://s3.amazonaws.com/shopping-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
          retailers: ['Walmart']
        },
        { id: 1234,
          name: 'Medium',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/shopping-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
          retailers: ['Walmart']
        },
        { id: 5678,
          name: 'Medium Too',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/shopping-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
          retailers: ['Walmart']
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
    const wrapper = mount(SearchBar, { store, localVue });
    expect(wrapper.findAll('input').length).toEqual(1)
  })

  test("it does not show on the page if in detailed view", () => {
    store.state.gallery = false;
    const wrapper = mount(SearchBar, { store, localVue });
    expect(wrapper.findAll('input').length).toEqual(0)
  })

  test("its placeholder default is 'Try \"coffee\" or \"Walmart\"'", () => {
    const wrapper = mount(SearchBar, { store, localVue });
    expect(wrapper.find('input').html()).toContain('placeholder=\"Try &quot;coffee&quot; or &quot;Walmart&quot')
  })

  test("the value of 'search' updates with input value", () => {
    const wrapper = mount(SearchBar, { store, localVue });
    expect(store.state.search).toEqual('')
    wrapper.find('input').setValue('Food')
    expect(store.state.search).toEqual('Food')
  })
});
