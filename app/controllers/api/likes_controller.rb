class Api::LikesController < ApplicationController
  def create
    @like = Like.new(user_id: current_user.id, track_id: params[:track_id])
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if !@like
      render json: "You already don't like that".to_json, status: 404
    else
      @like.destroy
      render json @like
    end
  end
end
