# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo_user", password: "password")

10.times do |idx|
  profile_pic = File.open("db/seed_data/user-#{idx}.jpg")
  User.create!(
    username: Faker::Name.unique.name,
    password: "password",
    profile_pic: profile_pic
  )
end
user_ids = User.all.pluck(:id)

idx = 0
Dir.foreach('db/seed_data/tracks') do |item|
  next if item[0] == '.'
  data = File.open("db/seed_data/tracks/#{item}")
  image = File.open("db/seed_data/track-#{idx}.jpg")
  Track.create!(
    title: item.split('.').first,
    image: image,
    user_id: user_ids.sample,
    data: data
  )
  idx += 1
end
track_ids = Track.all.pluck(:id)

100.times do
  Comment.create(
    user_id: user_ids.sample,
    track_id: track_ids.sample,
    body: Faker::Hipster.paragraph((1..3).to_a.sample)
  )
end

track_ids.each do |track_id|
  num_likes = (0..user_ids.length).to_a.sample
  user_ids.sample(num_likes).each do |user_id|
    Like.create!(
      track_id: track_id,
      user_id: user_id
    )
  end
end

10.times do |index|
  image = File.open("db/seed_data/track-#{index}.jpg")
  Playlist.create!(
    user_id: user_ids.sample,
    image: image,
    title: Faker::Space.nasa_space_craft
  )
end
playlist_ids = Playlist.all.pluck(:id)

playlist_ids.each do |playlist_id|
  num_tracks = (2..5).to_a.sample
  num_tracks.times do |index|
    PlaylistMembership.create!(
      playlist_id: playlist_id,
      track_id: track_ids.sample,
      ord: index
    )
  end
end
