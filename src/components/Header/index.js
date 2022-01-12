import React from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText } from './styled';

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="Notedly Logo" height="40" />
    <LogoText>Notedly</LogoText>
  </HeaderBar>
);

export default Header;