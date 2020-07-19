import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import OfferCardDetailedView from '@/components/OfferCardDetailedView.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("OfferCardDetailedView.vue", () => {
  let state
  let store

  beforeEach(() => {
    state = {
      gallery: false,
      offerId: 1284,
      offers: [
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
    }
    store = new Vuex.Store({
      state
    })
  })

  test("it does not show detailed view when gallery view is set to true", () => {
    store.state.gallery = true;
    const wrapper = mount(OfferCardDetailedView, { store, localVue });
    expect(wrapper.findAll('.offer-card-detailed').length).toEqual(0)
  })

  test("it only shows 1 detailed view card. The card with ID that is stored in offerId from being click", () => {
    let wrapper = mount(OfferCardDetailedView, { store, localVue });
    expect(wrapper.findAll('.offer-card-detailed').length).toEqual(1)
    expect(wrapper.find('.offer-card-detailed').html()).toContain('Heavy')
  })

  test("when the button is clicked the gallery view is true and detaild card is not longer rendered", () => {
    let wrapper = mount(OfferCardDetailedView, { store, localVue });
    wrapper.find('button').trigger('click')
    expect(store.state.gallery).toEqual(true)
    wrapper = mount(OfferCardDetailedView, { store, localVue });
    expect(wrapper.findAll('.offer-card-detailed').length).toEqual(0)
  })
});
