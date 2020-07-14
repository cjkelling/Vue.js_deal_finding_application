class Retailer < ActiveRecord::Base
  validates_presence_of :name
  has_many :retailer_offers
  has_many :offers, through: :retailer_offers
end
