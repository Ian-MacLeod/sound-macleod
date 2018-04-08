json.extract! comment, :id, :user_id, :track_id, :body
json.created_at time_ago_in_words(comment.created_at).sub('about ', '')
