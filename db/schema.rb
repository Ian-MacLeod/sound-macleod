# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180502173419) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "track_id"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["track_id"], name: "index_comments_on_track_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "track_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["track_id", "user_id"], name: "index_likes_on_track_id_and_user_id"
    t.index ["user_id", "track_id"], name: "index_likes_on_user_id_and_track_id", unique: true
  end

  create_table "playlist_memberships", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "playlist_id", null: false
    t.integer "ord", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["playlist_id", "ord"], name: "index_playlist_memberships_on_playlist_id_and_ord", unique: true
    t.index ["playlist_id", "track_id"], name: "index_playlist_memberships_on_playlist_id_and_track_id"
    t.index ["track_id", "playlist_id"], name: "index_playlist_memberships_on_track_id_and_playlist_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", limit: 35, null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "data", null: false
    t.string "image"
    t.index ["title"], name: "index_tracks_on_title"
    t.index ["user_id"], name: "index_tracks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_pic"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
