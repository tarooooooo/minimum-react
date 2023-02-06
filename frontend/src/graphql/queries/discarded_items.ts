import { gql } from "@apollo/client";

export default gql`
  query discardedItemsPage {
    discardedItems {
      ...itemBase
    }
  }
`;
