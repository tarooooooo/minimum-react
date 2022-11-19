import { gql } from "@apollo/client";

export default gql`
query ItemStockManagement($id: ID!) {
    itemStockManagement(id: $id){
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
