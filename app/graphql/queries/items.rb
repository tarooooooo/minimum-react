module Queries
  class Items < Queries::BaseQuery

    type [ObjectTypes::Item], null: false

    def resolve
      ::Item.active.order(:id)
    end
  end
end
