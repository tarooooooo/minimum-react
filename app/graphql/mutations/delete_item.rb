module Mutations
  class DeleteItem < Mutations::BaseMutation
    argument :id, ID, required: true

    field :id, ID, null: false

    def resolve(id:)
      item = Item.find(id)
      item.destroy!

      {id: id}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
