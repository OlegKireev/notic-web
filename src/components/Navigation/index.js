import React from 'react';
import { NavLink } from 'react-router-dom';
import pathnames from '@/constants/pathnames';
import { NavList } from './styled';
import useAuth from '@/hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const links = !isLoggedIn 
    ? pathnames.filter((pathname) => pathname.private === false)
    : pathnames;

  return (
    <nav>
      <NavList>
        {links.map(({ path, label, exact }) => (
          <li key={path}>
            <NavLink to={path} exact={exact}>{label}</NavLink>
          </li>
        ))}
      </NavList>
    </nav>
  )
}

export default Navigation;
