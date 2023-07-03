import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User {
    user {
      _id
      email
      username
      bookCount
      savedBooks {
        authors
        bookId
        description
        title
        image
        link
      }
    }
  }
`;