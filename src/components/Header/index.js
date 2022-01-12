import React, { forwardRef } from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText, LogoLink } from './styled';

const Header = forwardRef((props, ref) => (
  <HeaderBar {...props} ref={ref}>
    <LogoLink to="/">
      <Logo src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
    </LogoLink>
  </HeaderBar>
));

export default Header;