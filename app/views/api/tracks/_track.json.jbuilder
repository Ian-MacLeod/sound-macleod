json.extract! track, :id, :title, :user_id, :image, :data
json.created_at time_ago_in_words(track.created_at).sub('about ', '')
json.num_likes track.likes.length
json.num_comments track.comments.length
if logged_in?
  json.is_liked track.likes.pluck(:user_id).include?(current_user.id)
else
  json.is_liked false
end
