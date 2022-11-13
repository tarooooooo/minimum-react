import { gql } from "@apollo/client";

export default gql`
  mutation updateItemStockManagement($id: ID!, UpdateItemStockManagementAttributes!) {
    updateItemStockManagement(input: { id: $id, params: $params }) {
      itemStockManagement {
        id
        upperLimit
        category {
          id
          name
        }
      }
    }
  }
`;