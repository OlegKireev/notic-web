import { gql } from "@apollo/client";

export const GET_NOTE_FEED = gql`
  query noteFeed($cursor: String) {
  noteFeed(cursor: $cursor) {
    cursor
    hasNextPage
    notes {
      id
      createdAt
      content
      favoriteCount
			author {
        id
        username
      }
    }
	} 
}
`