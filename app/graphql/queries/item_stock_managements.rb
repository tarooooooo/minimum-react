module Queries
  class ItemStockManagements < Queries::BaseQuery

    type [ObjectTypes::ItemStockManagement], null: false

    def resolve
      ::ItemStockManagement.all.order(:id)
    end
  end
end
