tracks = @playlist.tracks.includes(:user).ordered

json.playlist do
  json.extract! @playlist, :user_id

  json.track_ids do
    json.array! tracks.pluck(:id).uniq
  end
end

json.tracks do
  tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :user_id, :image, :length, :data
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
