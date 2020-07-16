class Api::V1::OffersController < ApplicationController
  def index
    render json: Offer.all, include: [:retailers]
  end

  def update
    offer = Offer.find(params[:id])
    new_view_count = offer.views += 1
    offer.update(views: new_view_count)
  end
end
