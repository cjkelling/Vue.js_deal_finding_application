require 'spec_helper'

RSpec.describe Retailer, type: :model do
  describe 'validations' do
    it { should validate_presence_of :name }
  end

  describe 'relationships' do
    it { should have_many :retailer_offers }
    it { should have_many(:offers).through(:retailer_offers) }
  end
end
