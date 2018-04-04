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
    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track
      @track.destroy!
      render json: "Track deleted".to_json
    else
      render json: "Track does not exist".to_json, status: 404
    end
  end

  private

  def track_params
    params.require(:track).permit(
      :title, :user_id, :image_url, :length, :blob_url
    )
  end
end
