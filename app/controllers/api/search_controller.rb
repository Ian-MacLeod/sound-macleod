class Api::SearchController < ApplicationController
  def index
    # get playlists, users, tracks, use jbuilder for resp
    query = params[:query]
    @playlists = Playlist.where("lower(title) LIKE ?", "%#{query}%")
    @users = User.where("lower(username) LIKE ?", "%#{query}%")
    @tracks = Track.where("lower(title) LIKE ?", "%#{query}%")
  end
end
