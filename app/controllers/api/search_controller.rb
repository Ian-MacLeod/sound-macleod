class Api::SearchController < ApplicationController
  def index
    query = params[:query].downcase
    @playlists = Playlist.where("lower(title) LIKE ?", "%#{query}%")
    @users = User.where("lower(username) LIKE ?", "%#{query}%")
    @tracks = Track.where("lower(title) LIKE ?", "%#{query}%")
  end
end
