import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import { Container, Wrapper, Aside, Main } from './styled';

const Layout = ({
  children
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) {
      return
    }
    setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef])

  return (
    <Container>
      <Header ref={headerRef} />
      <Wrapper style={{
        height: `calc(100% - ${headerHeight}px)`
      }}>
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