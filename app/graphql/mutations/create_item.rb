module Mutations
  class CreateItem < Mutations::BaseMutation
    argument :params, InputTypes::Item, required: true

    field :item, ObjectTypes::Item, null: false

    def resolve(params:)
      item = Item.create!(params.to_h)

      {item: item}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
