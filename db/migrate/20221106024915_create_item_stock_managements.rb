class CreateItemStockManagements < ActiveRecord::Migration[7.0]
  def change
    create_table :item_stock_managements do |t|
      t.references :category, null: false, foreign_key: true
      t.integer :upper_limit, null: false

      t.timestamps
    end
  end
end
