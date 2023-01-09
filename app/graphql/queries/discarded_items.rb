module Queries
  class DiscardedItems < Queries::BaseQuery
    type ObjectTypes::Item.connection_type, null: false

    def resolve
      ::Item.discarded.order(id: "DESC")
    end
  end
end
