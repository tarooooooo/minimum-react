import { gql } from "@apollo/client";

export default gql`
  query items {
    items {
      id
      name
      price
      image
      dallEImage
      categoryId
      createdAt
      updatedAt
    }
  }
`;
