module Mutations
  class UpdateItemStockManagement < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :params, InputTypes::UpdateItemStockManagement, required: true

    field :item_stock_management, ObjectTypes::ItemStockManagement, null: false

    def resolve(id:, params:)
      item_stock_management = ItemStockManagement.find(id)
      item_stock_management.update!(params.to_h)

      {item_stock_management: item_stock_management}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
