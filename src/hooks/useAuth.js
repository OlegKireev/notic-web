import { useApolloClient, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { IS_LOGGED_IN } from '../api/auth';

const useAuth = () => {
  const client = useApolloClient();
  const history = useHistory();

  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  const { isLoggedIn } = data; 

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

  return {
    isLoggedIn,
    loading,
    error,
    handleLogOutClick,
  }
};

export default useAuth;