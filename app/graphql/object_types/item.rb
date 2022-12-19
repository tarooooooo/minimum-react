# frozen_string_literal: true

module ObjectTypes
  class Item < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :price, Integer
    field :photo, String
    field :category_id, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
