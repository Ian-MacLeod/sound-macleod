tracks = @playlist.tracks.includes(:user).order(:ord)

json.playlist do
  json.extract! @playlist, :user_id

  json.trackIds json.array! tracks.pluck(:id).uniq
end

json.tracks do
  tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :user_id, :image, :length, :data
    end
  end
end

json.users do
  tracks.pluck(:user).each do |user|
    json.set! user.id do
      json.extract! user, :username, :id
    end
  end
end
