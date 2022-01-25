import React, { forwardRef } from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoLink } from './styled';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useAuth from '@/hooks/useAuth';

const Header = forwardRef((props, ref) => {
  const { isLoggedIn, handleLogOutClick } = useAuth();

  return (
    <HeaderBar {...props} ref={ref}>
      <LogoLink to="/">
        <Logo src={logo} alt="Notic Logo" height="20" />
      </LogoLink>
      <div>
        {isLoggedIn
          ? <Button 
              kind="ghost"
              onClick={handleLogOutClick}
            >
              Log out
            </Button>
          : (
            <div>
              <Link to="/sign-in">Sign in</Link>
              {' / '}
              <Link to="/sign-up">Sign up</Link>
            </div>
          )}
      </div>
    </HeaderBar>
  )
});

export default Header;