class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render "api/projects/index"
  end

  def create
    @project = Project.new(project_params)
    if @project.save
        rewards = params[:project][:reward].each{|key, value|  params[:project][:reward][key][:project_id]=@project.id}
        success = rewards.each {|key, reward|
          Reward.new(title: reward[:title], description: reward[:description], amount: reward[:amount].to_i, limit: reward[:limit].to_i, project_id: reward[:project_id], sold: 0).save}
        if success.include?(false)
          render json: "error", status: 500
        else
          render "api/projects/show"
        end
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id].to_i)
    render "api/projects/show"
  end

  def update
    @project = Project.find(params[:id].to_i)
    if @project.update(project_params)
          render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def destroy
    @project = Project.find(params[:id].to_i)
    @project.destroy
    render index
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo_url,
    :creater_id, :end_date, :goal, :category, :funded, :short)
  end

end
