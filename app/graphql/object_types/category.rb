# frozen_string_literal: true

module ObjectTypes
  class Category < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :items, ObjectTypes::Item.connection_type, null: true, max_page_size: 300
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
