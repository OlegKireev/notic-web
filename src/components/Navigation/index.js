import React from 'react';
import { NavLink } from 'react-router-dom';
import pathnames from '@/constants/pathnames';

const Navigation = () => (
  <ul>
    {pathnames.map(({ path, label, exact }) => (
      <li key={path}>
        <NavLink to={path} exact={exact}>{label}</NavLink>
      </li>
    ))}
  </ul>
)

export default Navigation;
