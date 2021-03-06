import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
       signUp(email: $email, username: $username, password: $password)
    }
`;

export const SIGNIN_USER = gql`
    mutation signIn($email: String, $username: String, $password: String!) {
       signIn(email: $email, username: $username, password: $password)
    }
`;

export const IS_LOGGED_IN = gql`
{
  isLoggedIn @client
} `;
