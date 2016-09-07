class Api::SearchController < ApplicationController
  def index
    @search = Project.where('title Like ?', "%#{params[:data]}%")
    render "api/search/index"
  end
end