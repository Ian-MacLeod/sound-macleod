tracks = @user.tracks

json.user do
  json.partial! "api/users/user", user: @user
  json.track_ids do
    json.array! tracks.pluck(:id)
  end
end

json.tracks do
  tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
end
