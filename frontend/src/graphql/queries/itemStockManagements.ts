import { gql } from "@apollo/client";

export default gql`
  query itemStockManagements {
    itemStockManagements {
      id
      upperLimit
      createdAt
      updatedAt
      category {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
