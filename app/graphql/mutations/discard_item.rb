module Mutations
  class DiscardItem < Mutations::BaseMutation
    field :item, ObjectTypes::Item, null: false
    argument :params, InputTypes::DiscardItemInputType, required: true

    def resolve(params:)
      item = Item.find params.item_id
      item.update!(state: :discarded)

      {
        item: item
      }

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
