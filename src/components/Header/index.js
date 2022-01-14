import React, { forwardRef } from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText, LogoLink } from './styled';
import { IS_LOGGED_IN } from '@/api/auth';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const Header = forwardRef((props, ref) => {
  const { data } = useQuery(IS_LOGGED_IN);
  const { isLoggedIn } = data; 

  return (
    <HeaderBar {...props} ref={ref}>
      <LogoLink to="/">
        <Logo src={logo} alt="Notedly Logo" height="40" />
        <LogoText>Notedly</LogoText>
      </LogoLink>
      <div>
        {isLoggedIn
          ? <Link>Log out</Link>
          : (
            <div>
              <Link to="/sign in">Sign in</Link>
              <Link to="/sign up">Sign up</Link>
            </div>
          )}
      </div>
    </HeaderBar>
  )
});

export default Header;