require 'spec_helper'

RSpec.describe Api::V1::OffersController, type: :controller do
  describe 'GET index' do
    it 'sends an index list of all offers' do
      create_list(:offer, 5)

      get :index, params: { use_route: 'api/v1/offers' }

      expect(response).to be_successful

      offers = JSON.parse(response.body)

      expect(offers.count).to eq(5)
    end
  end

  describe 'PATCH update' do
    it 'receives a PATCH request for offer views' do
      create(:offer)

      offer = Offer.last

      expect(offer.views).to eq(0)

      patch :update, params: { use_route: "/api/v1/offers/", id: "#{offer.id}" }

      expect(response).to be_successful

      offer.reload

      expect(offer.views).to eq(1)
    end
  end
end
