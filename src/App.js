import React from 'react';
import Pages from './pages';
import GlobalStyle from './theme/GlobalStyle';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './api';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  )
};

export default App;