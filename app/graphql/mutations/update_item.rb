module Mutations
  class UpdateItem < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :params, InputTypes::Item, required: true

    field :item, ObjectTypes::Item, null: false

    def resolve(id:, params:)
      item = Item.find(id)
      item.update!(params.to_h)

      {item: item}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
