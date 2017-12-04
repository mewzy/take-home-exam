class ListingsController < ApplicationController
  def all

    begin
      @listings = Listing.all
    rescue => e
      @listings = []
    end

  end

  def filter
    # Add Code here

    return render json: {
      listings: Listing.all
    }, status: 200
  end
end
