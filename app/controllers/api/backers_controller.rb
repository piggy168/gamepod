class Api::BackersController < ApplicationController
  def create

    @backer = Backer.new(backer_params)
    if @backer.save
      @project = @backer.project
      @project.funded += @backer.reward.amount
      @backer.reward.sold += 1
        if (@backer.save && @project.save)
          render "api/projects/show"
        else
          render json: "error", status: 500
        end
      else
        render json: "error", status: 500
      end
  end

  private

  def backer_params
    params.require(:backer).permit(:user_id, :reward_id)
  end
end
