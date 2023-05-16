import { gql } from "@apollo/client";

export default gql`
  fragment itemBase on Item {
    id
    name
    price
    image
    dallEImage
    categoryId
  }
`;