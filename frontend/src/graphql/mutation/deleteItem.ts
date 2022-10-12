import { gql } from "@apollo/client";

export default gql`
  mutation deleteItem($id: ID!) {
    deleteItem(input: { id: $id }) {
      id
    }
  }
`;
