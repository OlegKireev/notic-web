import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import logo from '@/assets/img/logo.svg';
import {
  HeaderBar, Logo, LogoLink, ProfileWrapper,
} from './styled';
import Button from '../Button';
import useAuth from '@/hooks/useAuth';
import { GET_ME } from '@/api/user';
import ProfileLink from '../ProfileLink';
import Preloader from '../Preloader';
import IconLogout from '@/Icons/Logout';

function Header() {
  const { isLoggedIn, handleLogOutClick } = useAuth();
  const { data: userData, loading } = useQuery(GET_ME);

  if (!userData || !userData.me) {
    return null;
  }

  return (
    <HeaderBar>
      <LogoLink to="/">
        <Logo src={logo} alt="Notic Logo" height="20" />
      </LogoLink>
      <div>
        {isLoggedIn
          ? (
            <ProfileWrapper>
              {loading
                ? <Preloader />
                : <ProfileLink data={userData.me} />}
              <Button
                kind="ghost"
                onClick={handleLogOutClick}
              >
                <IconLogout />
              </Button>
            </ProfileWrapper>
          )
          : (
            <div>
              <Link to="/sign-in">Sign in</Link>
              {' / '}
              <Link to="/sign-up">Sign up</Link>
            </div>
          )}
      </div>
    </HeaderBar>
  );
}

export default Header;
