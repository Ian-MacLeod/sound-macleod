class Api::TracksController < ApplicationController
  def show
    @track = Track.find(params[:id])
  end

  def index
    @tracks = Track.all.includes(:user)
    @users = @tracks.collect(&:user).flatten
  end

  def create
    @track = Track.new(track_params)
    @track.user = current_user
    @track.length ||= 123
    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if !@track
      render json: "Track does not exist".to_json, status: 404
    elsif current_user != @track.user
      render json: "You don't own that track".to_json, status: 422
    else
      @track.destroy!
      render json: @track.id.to_json
    end
  end

  private

  def track_params
    params.require(:track).permit(
      :title, :user_id, :image, :length, :data
    )
  end
end
