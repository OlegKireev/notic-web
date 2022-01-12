import React from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText, LogoLink } from './styled';

const Header = () => (
  <HeaderBar>
    <LogoLink to="/">
      <Logo src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
    </LogoLink>
  </HeaderBar>
);

export default Header;