import React from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText, LogoLinkStyle } from './styled';
import { Link } from 'react-router-dom';

const Header = () => (
  <HeaderBar>
    <Link style={LogoLinkStyle} to="/">
      <Logo src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
    </Link>
  </HeaderBar>
);

export default Header;