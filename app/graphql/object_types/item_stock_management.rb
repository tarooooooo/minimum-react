# frozen_string_literal: true

module ObjectTypes
  class ItemStockManagement < Types::BaseObject
    field :id, ID, null: false
    field :category_id, ID, null: false
    field :upper_limit, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
