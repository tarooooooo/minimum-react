class AddDallEImageToItem < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :dall_e_image, :string, after: :image
  end
end
