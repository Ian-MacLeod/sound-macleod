class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :track_id

      t.timestamps
    end

    add_index :likes, %i(user_id track_id), unique: true
    add_index :likes, %i(track_id user_id)
  end
end
