import React from 'react';
import { NavLink } from 'react-router-dom';
import pathnames from '@/constants/pathnames';
import { NavList } from './styled';

const Navigation = () => (
  <nav>
    <NavList>
      {pathnames.map(({ path, label, exact }) => (
        <li key={path}>
          <NavLink to={path} exact={exact}>{label}</NavLink>
        </li>
      ))}
    </NavList>
  </nav>
)

export default Navigation;
