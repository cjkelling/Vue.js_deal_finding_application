class Api::V1::RetailersController < ApplicationController
  def index
    render json: Retailer.all
  end
end
