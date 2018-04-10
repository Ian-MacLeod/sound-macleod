comments = @user.comments.includes(track: :comments)
liked_tracks = @user.liked_tracks.includes(:user, :comments)

json.users do
  json.set! @user.id do
    json.partial! "api/users/user", user: @user
    json.track_ids do
      json.array! @user.tracks.pluck(:id)
    end
    json.comment_ids do
      json.array! comments.order(created_at: :desc).pluck(:id).uniq
    end
    json.liked_track_ids do
      json.array! liked_tracks.order(created_at: :desc).pluck(:id).uniq
    end
  end


  liked_tracks.each do |track|
    json.set! track.user.id do
      json.partial! "api/users/user", user: track.user
    end
  end
end

json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end

  liked_tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end

  comments.each do |comment|
    json.set! comment.track.id do
      json.partial! "api/tracks/track", track: comment.track
    end
  end
end

json.comments do
  comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end
