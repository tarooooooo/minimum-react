module Queries
  class Category < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Category, null: false

    def resolve(id:)
      ::Category.find(id)
    end
  end
end
