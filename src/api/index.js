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

// Проверяем наличие локального токена
const data = {
  isLoggedIn: !!localStorage.getItem('token')
};
// Записываем данные кэша при начальной загрузке
cache.writeData({ data });

const apolloClient = new ApolloClient({
  uri,
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
})

// Записываем данные кэша после его сброса
apolloClient.onResetStore(() => cache.writeData({ data }));
export default apolloClient;