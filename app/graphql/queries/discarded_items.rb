module Queries
  class DiscardedItems < Queries::BaseQuery
    type [ObjectTypes::Item], null: false

    def resolve
      ::Item.discarded.order(id: "DESC")
    end
  end
end
