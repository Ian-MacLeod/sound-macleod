class Api::PlaylistController < ApplicationController
  def show
    @playlist = Playlist.find(params[:id])
    if @playlist == nil
      render json: "That playlist does not exist".to_json, status: 404
    end
  end

  def index
    @playlists = Playlist.all
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render "api/playlist/show"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist == nil
      render json: "That playist does not exist".to_json, status: 404
    elsif @playlist.save
      render "api/playlist/show"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end
end
