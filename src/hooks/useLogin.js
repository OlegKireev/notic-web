import { useApolloClient, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { SIGNIN_USER } from '../api/auth';

const useLogin = () => {
  const client = useApolloClient();
  const history = useHistory();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      // Обновляем локальный кэш Apollo
      client.writeData({ data: { isLoggedIn: true }});
      history.push('/');
    }
  });

  return {
    signIn,
    loading,
    error
  }
};

export default useLogin;