import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import { Container, Wrapper, Aside, Main } from './styled';

const Layout = ({
  children
}) => {
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
  )
}

export default Layout;