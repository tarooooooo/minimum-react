class AddStateToItem < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :state, :string, null: false, after: :price, default: :active
  end
end
