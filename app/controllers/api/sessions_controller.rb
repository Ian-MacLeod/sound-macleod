class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render "api/users/show-alone"
    else
      render json: ["Invalid Login"], status: 403
    end
  end

  def destroy
    return render json: ["You are already signed out"] unless logged_in?
    log_out
    render json: ["Successfully logged out"]
  end
end
