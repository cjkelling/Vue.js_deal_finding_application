import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import OfferCardGalleryView from '@/components/OfferCardGalleryView.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("SearchBar.vue", () => {
  let state
  let store

  beforeEach(() => {
    state = {
      gallery: true,
      search: '',
      offerId: null,
      offers: [
        { id: 1284,
          name: 'Crystal Heavy Liquid',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
        },
        { id: 1234,
          name: 'Crystal Medium Liquid',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
        },
        { id: 5678,
          name: 'Crystal Medium Liquid',
          description: "3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club",
          terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles Offer only redeemable at Sam's Club.",
          image_url: 'http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png',
          expiration: '2016-04-03 06:59:00 UTC',
        }
      ]
    }
    store = new Vuex.Store({
      state
    })
  })

  test("it shows all gallery view style offers if gallery view is true", () => {
    const wrapper = mount(OfferCardGalleryView, { store, localVue });
    expect(wrapper.findAll('.offer-card').length).toEqual(3)
  })

  test("it shows zero gallery view style offers if gallery view is false", () => {
    store.state.gallery = false;
    const wrapper = mount(OfferCardGalleryView, { store, localVue });
    expect(wrapper.findAll('.offer-card').length).toEqual(0)
  })

  test("it only shows offers that match the search bar paramiters", () => {
    store.state.search = 'Heavy';
    let wrapper = mount(OfferCardGalleryView, { store, localVue });
    expect(wrapper.findAll('.offer-card').length).toEqual(1)

    store.state.search = 'Medium';
    wrapper = mount(OfferCardGalleryView, { store, localVue });
    expect(wrapper.findAll('.offer-card').length).toEqual(2)
  })

  test("when an offer card is clicked gallery view is false and offerId is set to clicked object ID", () => {
    let wrapper = mount(OfferCardGalleryView, { store, localVue });
    wrapper.findAll('.offer-card').at(0).trigger('click')
    expect(store.state.gallery).toEqual(false)
    expect(store.state.offerId).toEqual(1284)
    wrapper = mount(OfferCardGalleryView, { store, localVue });
    expect(wrapper.findAll('.offer-card').length).toEqual(0)
  })
});
