module Mutations
  class RestoreItem < Mutations::BaseMutation
    field :item, ObjectTypes::Item, null: false
    argument :params, InputTypes::RestoreItemInputType, required: true

    def resolve(params:)
      item = Item.find params.item_id
      item.update!(state: :active)

      {
        item: item
      }

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
