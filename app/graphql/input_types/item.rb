module InputTypes
  class Item < Types::BaseInputObject
    graphql_name 'ItemAttributes'

    argument :name, String, required: true
    argument :image, String, required: false
    argument :price, Integer, required: false
    argument :category_id, ID, required: false
  end
end
