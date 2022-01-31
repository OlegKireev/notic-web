import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Navigation from '../Navigation';
import {
  Container, Wrapper, Aside, Main,
} from './styled';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};

function Layout({
  children,
}) {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Aside>
          <Navigation />
        </Aside>
        <Main>
          {children}
        </Main>
      </Wrapper>
    </Container>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
