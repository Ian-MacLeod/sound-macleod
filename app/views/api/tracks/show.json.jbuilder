json.track do
  json.partial! "api/tracks/track", track: @track
  json.comment_ids do
    json.array! @track.comments.order(created_at: :desc).pluck(:id)
  end
end

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end

json.users do
  @track.commenters.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end

  json.set! @track.user.id do
    json.partial! "api/users/user", user: @track.user
  end
end
