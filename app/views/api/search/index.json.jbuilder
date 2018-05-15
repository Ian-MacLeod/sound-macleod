json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! "api/playlists/playlist", playlist: playlist
    end
  end
end

json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
end