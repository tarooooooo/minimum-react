class Category < ApplicationRecord
  has_many :items
  # ユーザーが追加されたら、has_manyに変更
  has_one :item_stock_management, dependent: :destroy

  validates :name, presence: true, length: { maximum: 100 }

  def item_count
    items.count
  end
end
