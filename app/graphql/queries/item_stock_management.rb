module Queries
  class ItemStockManagement < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::ItemStockManagement, null: false

    def resolve(id:)
      ::ItemStockManagement.find(id)
    end
  end
end
