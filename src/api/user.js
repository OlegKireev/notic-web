import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me { 
      id
      username
      avatar
      favoriteNotes {
        id 
      }
    } 
  }
`;