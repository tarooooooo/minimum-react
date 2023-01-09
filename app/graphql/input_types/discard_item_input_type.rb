class InputTypes::DiscardItemInputType < Types::BaseInputObject
  graphql_name 'DiscardItemAttributes'

  argument :item_id, ID, required: true
end
