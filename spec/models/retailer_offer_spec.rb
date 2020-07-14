require 'spec_helper'

RSpec.describe RetailerOffer, type: :model do
  describe 'relationships' do
    it { should belong_to :retailer }
    it { should belong_to :offer }
  end
end
