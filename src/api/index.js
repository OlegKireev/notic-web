import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
})

export default apolloClient;