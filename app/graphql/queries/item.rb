module Queries
  class Item < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Item, null: false

    def resolve(id:)
      ::Item.find(id)
    end
  end
end
