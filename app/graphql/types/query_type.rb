module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :items, resolver: Queries::Items
    field :item, resolver: Queries::Item
    field :category, resolver: Queries::Category
    field :categories, resolver: Queries::Categories
    field :item_stock_management, resolver: Queries::ItemStockManagement
    field :item_stock_managements, resolver: Queries::ItemStockManagements
    field :discarded_items, resolver: Queries::DiscardedItems
  end
end
