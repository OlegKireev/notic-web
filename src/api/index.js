import { ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import apolloCache from './cache';

const uri = process.env.API_URI;

const httpLink = createHttpLink({ uri });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: localStorage.getItem('token') || '',
  },
}));

const apolloClient = new ApolloClient({
  uri,
  link: authLink.concat(httpLink),
  cache: apolloCache,
  resolvers: {},
  connectToDevTools: true,
});

export default apolloClient;
