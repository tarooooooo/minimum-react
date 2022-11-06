module InputTypes
  class ItemStockManagement < Types::BaseInputObject
    graphql_name 'ItemStockManagementAttributes'

    argument :upper_limit, Integer, required: true
    argument :category_id, ID, required: true
  end
end
