class Item < ApplicationRecord
  mount_base64_uploader :image, ItemImageUploader
  belongs_to :category

  scope :active, -> {where(state: :active)}
  scope :discarded, -> {where(state: :discarded)}

  state_machine :state, initial: :active do
    state :discarded
  end
end
