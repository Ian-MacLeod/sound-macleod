class RemoveLengthColumnFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :length
  end
end
