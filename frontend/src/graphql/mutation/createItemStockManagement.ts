import { gql } from "@apollo/client";

export default gql`
  mutation createItemStockManagement($params: ItemStockManagementAttributes!) {
    createItemStockManagement(input: { params: $params }) {
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