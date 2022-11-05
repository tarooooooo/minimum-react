module Queries
  class Categories < Queries::BaseQuery

    type [ObjectTypes::Category], null: false

    def resolve
      ::Category.all.order(:id)
    end
  end
end
