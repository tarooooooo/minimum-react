# frozen_string_literal: true

module ObjectTypes
  class Item < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :image, String, null: true
    field :price, Integer
    field :category_id, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def image
      binary_data = File.read("public/#{object.image.url}")
      Base64.strict_encode64(binary_data)

    end
  end
end
