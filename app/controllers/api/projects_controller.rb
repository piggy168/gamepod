class Api::ProjectsController < ApplicationController
  def index
    @boardgames = Project.where(category: "boardgame").first(3)
    @videogames = Project.where(category: "videogame").first(3)
    @mobilegames = Project.where(category: "mobilegame").first(3)
    render "api/projects/index"
  end

  def create
    @project = Project.new(project_params)
    if @project.save
        rewards = params[:project][:reward].each{|key, value|  params[:project][:reward][key][:project_id]=@project.id}
        success = rewards.each {|key, reward|
          Reward.new(title: reward[:title], description: reward[:description], amount: reward[:amount].to_i, limit: reward[:limit].to_i, project_id: reward[:project_id], sold: 0).save}
        if success.include?(false)
          render json: "error creating rewards", status: 500
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
       rewards = params[:project][:reward]
       success = rewards.each do |key, reward|
        newreward=Reward.find(reward["id"].to_i).update(title: reward["title"], amount: reward["amount"].to_i, description: reward["description"])
      end
      if success.include?(false)
        render json: "reward save error", status: 500
      else
          render "api/projects/show"
      end
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def destroy
    @project = Project.find(params[:id].to_i)
    @project.destroy
    render "api/projects/index"
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :photo_url,
    :creater_id, :end_date, :goal, :category, :funded, :short)
  end


end
