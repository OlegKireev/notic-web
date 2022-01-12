import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

const Layout = ({
  children
}) => (
  <div>
    <Header />
    <Navigation />
    <main>
      {children}
    </main>
  </div>
)

export default Layout;