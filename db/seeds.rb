# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

require 'csv'
Offer.delete_all
CSV.foreach(Rails.root.join('db','offers.seed.csv').to_s, headers: true) do |row|
  Offer.create!(row.to_hash)
end

Retailer.delete_all
CSV.foreach(Rails.root.join('db','retailers.seed.csv').to_s, headers: true) do |row|
  Retailer.create!(row.to_hash)
end

RetailerOffer.delete_all
CSV.foreach(Rails.root.join('db','retailer_offers.seed.csv').to_s, headers: true) do |row|
  RetailerOffer.create!(row.to_hash)
end

CSV.foreach(Rails.root.join('db','retailers.seed.csv').to_s, headers: true) do |retailer|
  CSV.foreach(Rails.root.join('db','offers.seed.csv').to_s, headers: true) do |offer|
    if(offer["description"].include?(retailer["name"]) || offer["terms"].include?(retailer["name"]))
      if(!RetailerOffer.find_by(retailer_id: retailer["id"], offer_id: offer["id"]))
        RetailerOffer.create!(retailer_id: retailer["id"], offer_id: offer["id"])
      end
    end
  end
end
