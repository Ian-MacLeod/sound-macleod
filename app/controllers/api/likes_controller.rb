class Api::LikesController < ApplicationController
  def create
    @like = Like.new(user_id: current_user.id, track_id: params[:track_id])
    if @like.save
      render "api/likes/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(track_id: params[:track_id], user_id: current_user.id)
    if !@like
      render json: "You already don't like that".to_json, status: 404
    else
      @like.destroy
      render "api/likes/show"
    end
  end
end
