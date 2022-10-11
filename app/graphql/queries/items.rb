module Queries
  class Items < Queries::BaseQuery

    type [ObjectTypes::Item], null: false

    def resolve
      ::Item.all.order(:id)
    end
  end
end
