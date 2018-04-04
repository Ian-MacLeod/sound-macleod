class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show-alone"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: "That user does not exist".to_json, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
