import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import { Container, Wrapper, Aside, Main } from './styled';

const Layout = ({
  children
}) => (
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
)

export default Layout;