@playlists.includes({ tracks: %i(user likes) }, :user)

if @playlists.empty?
  json.playlists({})
  json.tracks({})
  json.users({})
else
  tracks = @playlists.includes(tracks: %i(user likes)).collect(&:tracks).flatten

  json.playlists do
    @playlists.each do |playlist|
      json.set! playlist.id do
        json.user_id playlist.user_id
        json.trackIds do
          json.array! playlist.tracks.ordered.pluck(:id).uniq
        end
      end
    end
  end

  json.tracks do
    tracks.each do |track|
      json.set! track.id do
        json.extract! track, :id, :title, :user_id, :image, :length, :data
        json.created_at time_ago_in_words(track.created_at)
        json.num_likes track.likes.length
        json.is_liked track.likes.pluck(:user_id).include?(current_user.id)
      end
    end
  end

  json.users do
    tracks.each do |track|
      json.set! track.user.id do
        json.extract! track.user, :username, :id, :profile_pic
      end
    end
  end
end
