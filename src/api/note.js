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
        avatar
      }
    }
	} 
}
`;

export const GET_MY_NOTES = gql`
query me {
  me { 
    id
    username
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  } 
}
`;

export const GET_MY_FAVORITES = gql`
query me {
  me { 
    id
    username
    favoriteNotes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
}
`;

export const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

export const CREATE_NOTE = gql`
mutation createNote($content: String!) {
  createNote(content: $content) {
    id
    content
    createdAt
    favoriteCount
    favoritedBy {
      id
      username 
    }
    author {
      username
      id 
    }
  } 
}`;

export const EDIT_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username 
      }
      author {
        username
        id
      }
    } 
  }
`;