import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context';

const uri = process.env.API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || '',
    }
  }
})

const apolloClient = new ApolloClient({
  uri,
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true,
})

export default apolloClient;