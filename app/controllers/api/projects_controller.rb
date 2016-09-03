class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render "api/projects/index"
  end

  def create
  end

  def show
    @project = Project.find(params[:id].to_i)
    render "api/projects/show"
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo_url,
    :creater_id, :end_date, :goal, :category, :funded)
  end

end
