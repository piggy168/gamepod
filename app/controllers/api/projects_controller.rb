class Api::ProjectsController < ApplicationController
  def index
    @projectes = Project.all
    render json: Project.all
  end

  def create
  end
end
