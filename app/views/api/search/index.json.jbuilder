tracks = @tracks.includes(:likes, :comments, :user)
track_users = tracks.collect(&:user).flatten

users = @users.includes(:tracks)

playlists = @playlists.includes({ tracks: %i(user likes comments) }, :user)
playlist_tracks = playlists.collect(&:tracks).flatten

json.results do
  json.track_ids do
    json.array! tracks.pluck(:id)
  end
  json.user_ids do
    json.array! users.pluck(:id)
  end
  json.playlist_ids do
    json.array! playlists.pluck(:id)
  end
end

json.tracks({})
json.tracks do
  tracks.each do |track|
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
  playlist_tracks.each do |track|
    json.set! track.user.id do
      json.extract! track.user, :username, :id, :profile_pic
    end
  end

  track_users.each do |user|
    json.set! user.id do
      json.extract! user, :username, :id, :profile_pic
    end
  end

  users.each do |user|
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
        json.array! playlist.tracks.pluck(:id).uniq
      end
      json.created_at time_ago_in_words(playlist.created_at).sub('about ', '')
    end
  end
end