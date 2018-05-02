class AddCharacterLimitToSongTitle < ActiveRecord::Migration[5.1]
  def change
    change_column :tracks, :title, :string, limit: 35
  end
end
