class ItemStockManagement < ApplicationRecord
  belongs_to :category
  validates :upper_limit, presence: true

  def item_count
    category.items.active.count
  end
end
