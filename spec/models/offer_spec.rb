require 'spec_helper'

RSpec.describe Offer, type: :model do
  describe 'validations' do
    it { should validate_presence_of :name }
    it { should validate_presence_of :description }
    it { should validate_presence_of :terms }
    it { should validate_presence_of :image_url }
    it { should validate_presence_of :expiration }
    it { should validate_presence_of :views }
  end

  describe 'relationships' do
    it { should have_many :retailer_offers }
    it { should have_many(:retailers).through(:retailer_offers) }
  end
end
