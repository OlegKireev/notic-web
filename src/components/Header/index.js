import React, { forwardRef } from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText, LogoLink } from './styled';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useAuth from '@/hooks/useAuth';

const Header = forwardRef((props, ref) => {
  const { isLoggedIn, handleLogOutClick } = useAuth();

  return (
    <HeaderBar {...props} ref={ref}>
      <LogoLink to="/">
        <Logo src={logo} alt="Notedly Logo" height="40" />
        <LogoText>Notedly</LogoText>
      </LogoLink>
      <div>
        {isLoggedIn
          ? <Button 
              kind="text"
              onClick={handleLogOutClick}
            >
              Log out
            </Button>
          : (
            <div>
              <Link to="/sign-in">Sign in</Link>
              <Link to="/sign-up">Sign up</Link>
            </div>
          )}
      </div>
    </HeaderBar>
  )
});

export default Header;