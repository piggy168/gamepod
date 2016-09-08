class Api::UsersController < ApplicationController

	def create
		# debugger
		@user = User.new(user_params)
		@user.money = 100
		@user.photo_url = "http://res.cloudinary.com/dlszpthqv/image/upload/v1473270317/user_qtkf16.jpg"
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
		@user = User.find(params[:id].to_i)
		render "api/users/show"
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
