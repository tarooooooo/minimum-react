import { gql } from "@apollo/client";

export default gql`
  query categories {
    categories {
      id
      name
      itemCount
      itemStockManagement {
        upperLimit
      }
      items {
        nodes {
          id
          name
          price
        }
      }
    }
  }
`;
