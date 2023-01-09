class InputTypes::RestoreItemInputType < Types::BaseInputObject
  graphql_name 'RestoreItemAttributes'

  argument :item_id, ID, required: true
end
