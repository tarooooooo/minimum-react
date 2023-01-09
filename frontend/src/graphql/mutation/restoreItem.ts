import { gql } from "@apollo/client";

export default gql`
  mutation restoreItem($params: RestoreItemAttributes!) {
    restoreItem(input: { params: $params }) {
      item {
        id
        name
        price
      }
    }
  }
`;
