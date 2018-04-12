tracks = @playlist.tracks.includes(:user).ordered

json.playlist do
  json.partial! "api/playlists/playlist", playlist: @playlist

  json.track_ids do
    json.array! tracks.pluck(:id).uniq
  end

  json.created_at time_ago_in_words(@playlist.created_at).sub('about ', '')
end

json.tracks do
  tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
end

json.users do
  tracks.each do |track|
    json.set! track.user.id do
      json.extract! track.user, :username, :id
    end
  end
end
