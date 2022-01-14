import React, { forwardRef } from 'react';
import logo from '@/assets/img/logo.svg';
import { HeaderBar, Logo, LogoText, LogoLink } from './styled';
import { IS_LOGGED_IN } from '@/api/auth';
import { useApolloClient, useQuery } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button';

const Header = forwardRef((props, ref) => {
  const history = useHistory();
  const { data } = useQuery(IS_LOGGED_IN);
  const { isLoggedIn } = data; 
  const client = useApolloClient();

  const handleLogOutClick = () => {
    // Удаляем токен
    localStorage.removeItem('token');
    // Очищаем кэш приложения
    client.resetStore();
    // Обновляем локальное состояние
    client.writeData({ data: { isLoggedIn: false } });
    // Перенаправляем пользователя на домашнюю страницу
    history.push('/');
  };

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
            >Log out</Button>
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