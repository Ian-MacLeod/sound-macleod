class AddCharacterLimitToUsername < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :username, :string, limit: 20
  end
end
