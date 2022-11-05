module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :items, resolver: Queries::Items
    field :item, resolver: Queries::Item
    field :category, resolver: Queries::Category
    field :categories, resolver: Queries::Categories
  end
end
