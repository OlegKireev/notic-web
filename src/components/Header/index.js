import React, { forwardRef } from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoLink, ProfileWrapper } from './styled';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '@/api/user';
import ProfileLink from '../ProfileLink';
import Preloader from '../Preloader';
import IconLogout from '@/Icons/Logout';

const Header = () => {
  const { isLoggedIn, handleLogOutClick } = useAuth();
  const { data: userData, loading } = useQuery(GET_ME);

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
                  : <ProfileLink data={userData.me} /> 
                }
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
  )
};

export default Header;