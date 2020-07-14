class Api::V1::HomeController < ApplicationController
  def index
    render json: Offer.all, include: [:retailers]
  end
end
