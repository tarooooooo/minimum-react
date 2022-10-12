import { gql } from "@apollo/client";

export default gql`
  mutation updateItem($id: ID!, $params: ItemAttributes!) {
    updateItem(input: { id: $id, params: $params }) {
      item {
        id
        name
        price
      }
    }
  }
`;
