module InputTypes
  class UpdateItemStockManagement < Types::BaseInputObject
    graphql_name 'UpdateItemStockManagementAttributes'

    argument :upper_limit, Integer, required: true
  end
end
