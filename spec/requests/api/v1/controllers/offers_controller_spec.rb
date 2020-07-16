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
end
