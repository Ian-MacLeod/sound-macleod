@playlists.includes({ tracks: %i(user likes) }, :user)
tracks = @playlists.tracks.order(:ord)

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.exract! playlist, :user_id
      json.trackIds json.array! tracks.pluck(:id).uniq
    end
  end
end

json.tracks do
  tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :user_id, :image, :length, :data
      json.created_at time_ago_in_words(track.created_at)
      json.num_likes track.likes.length
      json.is_liked track.likes.pluck(:user_id).include?(current_user.id)
    end
  end
end
