import { gql } from "@apollo/client";

export default gql`
  query Category($id: ID!) {
    category(id: $id){
      id
      name
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
