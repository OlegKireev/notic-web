import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Pages from './pages';
import GlobalStyle from './theme/GlobalStyle';
import apolloClient from './api';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
}

export default App;
