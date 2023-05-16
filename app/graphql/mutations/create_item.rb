module Mutations
  class CreateItem < Mutations::BaseMutation
    argument :params, InputTypes::Item, required: true

    field :item, ObjectTypes::Item, null: false

    def resolve(params:)
      item = Item.new(params.to_h)

      unless item.image.present?
        client = OpenAI::Client.new(access_token: Rails.application.credentials.open_ai.access_token)
        response = client.images.generate(parameters: { prompt: item.name, size: "256x256" })
        item.dall_e_image = response["data"].first["url"]
      end

      item.save!
      {item: item}

    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
