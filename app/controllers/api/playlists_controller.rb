class Api::PlaylistsController < ApplicationController
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
    @playlist = Playlist.new(title: params[:playlist][:title])
    @playlist.user = current_user
    if @playlist.save
      params[:playlist][:track_ids].each_with_index do |track_id, idx|
        PlaylistMembership.create(
          playlist_id: @playlist.id,
          track_id: track_id,
          ord: idx)
      end
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist == nil
      render json: "That playist does not exist".to_json, status: 404
    elsif @playlist.save
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end
end
