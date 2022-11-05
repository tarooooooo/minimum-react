import { gql } from "@apollo/client";

export default gql`
  query categories {
    categories {
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
