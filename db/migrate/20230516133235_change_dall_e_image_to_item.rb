class ChangeDallEImageToItem < ActiveRecord::Migration[7.0]
  def change
    change_column :item, :dall_e_image, :text
  end
end
