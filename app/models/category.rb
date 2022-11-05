class Category < ApplicationRecord
  has_many :items
  
  validates :name, presence: true, length: { maximum: 100 }
end
