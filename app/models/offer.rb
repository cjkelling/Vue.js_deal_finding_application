class Offer < ActiveRecord::Base
  validates_presence_of :name, :description, :terms, :image_url, :expiration
  has_many :retailer_offers
  has_many :retailers, through: :retailer_offers
end
