comments = @user.comments.includes(:track)
tracks = @user.tracks.includes(:likes, :comments)
liked_tracks = @user.liked_tracks.includes(:user, :comments, :likes)
playlists = @user.playlists.includes(tracks: %i(user likes))
playlists_tracks = playlists.collect(&:tracks).flatten

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

    json.playlist_ids do
      json.array! playlists.order(created_at: :desc).pluck(:id).uniq
    end
  end


  liked_tracks.each do |track|
    json.set! track.user.id do
      json.extract! track.user, :username, :id, :profile_pic
    end
  end

  playlists_tracks.each do |track|
    json.set! track.user.id do
      json.extract! track.user, :username, :id, :profile_pic
    end
  end
end

json.tracks do
  tracks.each do |track|
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
      json.extract! comment.track, :id, :title, :image
    end
  end

  playlists_tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :image, :user_id, :data
      if logged_in?
        json.is_liked track.likes.pluck(:user_id).include?(current_user.id)
      else
        json.is_liked false
      end
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
