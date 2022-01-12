import React, { Fragment } from 'react';
import Pages from './pages';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Pages />
    </Fragment>
  )
};

export default App;