import { gql } from "@apollo/client";

export default gql`
query Item($id: ID!) {
    item(id: $id){
      ...itemBase
    }
  }
`;
