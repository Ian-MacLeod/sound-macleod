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
        json.partial! "api/playlists/playlist", playlist: playlist
        json.trackIds do
          json.array! playlist.tracks.ordered.pluck(:id).uniq
        end
        json.created_at time_ago_in_words(playlist.created_at).sub('about ', '')
      end
    end
  end

  json.tracks do
    tracks.each do |track|
      json.set! track.id do
        json.partial! "api/tracks/track", track: track
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

if @user_id
  json.queried_user do
    json.user_id @user_id
    json.playlist_ids @playlists.pluck(:id)
  end
end
