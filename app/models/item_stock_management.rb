class ItemStockManagement < ApplicationRecord
  belongs_to :category
  validates :upper_limit, presence: true
end
