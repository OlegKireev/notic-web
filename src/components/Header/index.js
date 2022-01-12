import React from 'react';
import logo from '@/assets/img/logo.svg';
import Navigation from '../Navigation';

const Header = () => (
  <header>
    <img src={logo} alt="Notedly Logo" height="40" />
    <h1>Notedly</h1>
  </header>
);

export default Header;