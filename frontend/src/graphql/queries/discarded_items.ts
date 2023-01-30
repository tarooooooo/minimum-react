import { gql } from "@apollo/client";

export default gql`
  query discardedItemsPage {
    discardedItems {
      edges {
        node {
          id
          price
          name
        }
      }
    }
  }
`;
