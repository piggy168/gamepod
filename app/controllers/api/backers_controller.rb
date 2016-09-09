class Api::BackersController < ApplicationController
  def create

    @backer = Backer.new(backer_params)
    if @backer.save
      @project = @backer.project
      @user = @backer.user
      @reward = @backer.reward
      @project.funded += @backer.reward.amount
      @reward.sold += 1
      @backer.user.money -=@backer.reward.amount
        if (@backer.save && @project.save && @user.save && @reward.save)
          render "api/backers/show"
        else
          render json: "error saving transaction", status: 500
        end
      else
        render json: "error making transaction", status: 500
      end
  end

  private

  def backer_params
    params.require(:backer).permit(:user_id, :reward_id)
  end
end
