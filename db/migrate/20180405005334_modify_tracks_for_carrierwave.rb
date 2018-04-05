class ModifyTracksForCarrierwave < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :data, :string, null: false
    add_column :tracks, :image, :string
    remove_column :tracks, :blob_url, :string
    remove_column :tracks, :image_url
  end
end
