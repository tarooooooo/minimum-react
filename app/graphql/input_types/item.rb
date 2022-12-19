module InputTypes
  class Item < Types::BaseInputObject
    graphql_name 'ItemAttributes'

    argument :name, String, required: true
    argument :price, Integer, required: false
    argument :photo, String, required: false
    argument :category_id, ID, required: true
  end
end
