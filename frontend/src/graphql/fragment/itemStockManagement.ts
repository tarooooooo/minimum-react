import { gql } from "@apollo/client";

export default gql`
  fragment itemStockManagementBase on ItemStockManagement {
    id
    upperLimit
    createdAt
    updatedAt
    itemCount
    category {
      id
      name
      createdAt
      updatedAt
    }
  }
`;