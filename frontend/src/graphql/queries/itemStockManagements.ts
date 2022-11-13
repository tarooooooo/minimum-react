import { gql } from "@apollo/client";

export default gql`
  query itemStockManagements {
    itemStockManagements {
      id
      upperLimit
      category {
        id
        name
      }
    }
  }
`;
