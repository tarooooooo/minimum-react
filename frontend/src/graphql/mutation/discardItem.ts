import { gql } from "@apollo/client";

export default gql`
  mutation discardItem($params: DiscardItemAttributes!) {
    discardItem(input: { params: $params }) {
      item {
        id
        name
        price
      }
    }
  }
`;
