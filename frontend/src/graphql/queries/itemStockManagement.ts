import { gql } from "@apollo/client";

export default gql`
query ItemStockManagement($id: ID!) {
    itemStockManagement(id: $id){
      ...itemStockManagementBase
    }
  }
`;
