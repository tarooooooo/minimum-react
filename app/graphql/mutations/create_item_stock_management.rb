module Mutations
  class CreateItemStockManagement < Mutations::BaseMutation
    argument :params, InputTypes::ItemStockManagement, required: true

    field :item_stock_management, ObjectTypes::ItemStockManagement, null: false

    def resolve(params:)
      item_stock_management = ItemStockManagement.find_or_initialize_by(category_id: params.category_id)
      item_stock_management.update!(
        upper_limit: params.upper_limit
      )

      {item_stock_management: item_stock_management}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
