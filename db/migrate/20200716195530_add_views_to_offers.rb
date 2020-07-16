class AddViewsToOffers < ActiveRecord::Migration[5.2]
  def change
    add_column :offers, :views, :integer, :default => 0
  end
end
