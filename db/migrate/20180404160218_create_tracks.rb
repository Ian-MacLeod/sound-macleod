class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :image_url
      t.float :length, null: false
      t.string :blob_url, null: false

      t.timestamps
    end

    add_index :tracks, :title
    add_index :tracks, :user_id
  end
end
