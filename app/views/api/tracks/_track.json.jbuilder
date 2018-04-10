json.extract! track, :id, :title, :user_id, :image, :length, :data
json.created_at time_ago_in_words(track.created_at)
json.num_likes track.likes.length
json.is_liked track.likes.include?(current_user.id)
