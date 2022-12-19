class Item < ApplicationRecord
  belongs_to :category

  mount_uploader :photo, ItemPhotoUploader
end
