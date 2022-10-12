import { gql } from "@apollo/client";

export default gql`
  mutation createItem($params: ItemAttributes!) {
    createItem(input: { params: $params }) {
      item {
        id
        name
        price
      }
    }
  }
`;
