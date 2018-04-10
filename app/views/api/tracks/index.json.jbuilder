json.tracks do
  @tracks.includes(:likes).each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end
