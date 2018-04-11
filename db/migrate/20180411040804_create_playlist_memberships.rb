class CreatePlaylistMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_memberships do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end

    add_index :playlist_memberships, %i(track_id playlist_id)
    add_index :playlist_memberships, %i(playlist_id track_id)
    add_index :playlist_memberships, %i(playlist_id ord), unique: true
  end
end
