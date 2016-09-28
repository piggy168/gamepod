class Api::SearchController < ApplicationController
  def index
    @search = Project.where('lower(title) Like ?', "%#{params[:data].downcase}%")
    render "api/search/index"
  end

  def show
    @search = Project.where('category = ?', "#{params[:id]}")
    render "api/search/index"
  end
end
