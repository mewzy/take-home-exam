class ListingsController < ApplicationController
  def all
    if defined? Listing
      @listings = Listing.all
    else
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
