import { useApolloClient, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { IS_LOGGED_IN } from '../api/auth';
import { isLoggedInVar } from '../api/cache';

const useAuth = () => {
  const history = useHistory();
  const client = useApolloClient();

  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  const { isLoggedIn } = data; 

  const handleLogOutClick = () => {
    // Удаляем токен
    localStorage.removeItem('token');
    isLoggedInVar(false);
    client.resetStore();
    // Перенаправляем пользователя на домашнюю страницу
    history.push('/');
  };

  return {
    isLoggedIn,
    loading,
    error,
    handleLogOutClick,
  }
};

export default useAuth;