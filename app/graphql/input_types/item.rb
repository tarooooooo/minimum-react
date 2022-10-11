module InputTypes
  class Item < Types::BaseInputObject
    graphql_name 'ItemAttributes'

    argument :name, String, required: true
    argument :price, Integer, required: false
  end
end
