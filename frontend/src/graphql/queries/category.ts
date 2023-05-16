import { gql } from "@apollo/client";

export default gql`
  query Category($id: ID!) {
    category(id: $id){
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
          image
          dallEImage
          price
        }
      }
    }
  }
`;
