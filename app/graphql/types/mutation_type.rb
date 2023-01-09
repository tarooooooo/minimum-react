module Types
  class MutationType < Types::BaseObject
    field :create_item, mutation: Mutations::CreateItem
    field :update_item, mutation: Mutations::UpdateItem
    field :delete_item, mutation: Mutations::DeleteItem
    field :create_item_stock_management, mutation: Mutations::CreateItemStockManagement
    field :update_item_stock_management, mutation: Mutations::UpdateItemStockManagement
    field :discard_item, mutation: Mutations::DiscardItem
    field :restore_item, mutation: Mutations::RestoreItem
  end
end
