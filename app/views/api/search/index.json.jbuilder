tracks = @tracks.includes(:user)
track_users = tracks.collect(&:user).flatten

playlists = @playlists.includes({ tracks: %i(user likes) }, :user)
playlist_tracks = playlists.collect(&:tracks).flatten

json.results do
  json.track_ids do
    json.array! tracks.pluck(:id)
  end
  json.user_ids do
    json.array! @users.pluck(:id)
  end
  json.playlist_ids do
    json.array! playlists.pluck(:id)
  end
end

json.tracks({})
json.tracks do
  tracks.includes(:likes, :comments).each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
  playlist_tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
end

json.users({})
json.users do
  track_users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.playlists({})
json.playlists do
  playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! "api/playlists/playlist", playlist: playlist
      json.trackIds do
        json.array! playlist.tracks.ordered.pluck(:id).uniq
      end
      json.created_at time_ago_in_words(playlist.created_at).sub('about ', '')
    end
  end
end