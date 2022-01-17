import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { SIGNIN_USER } from '../api/auth';
import { isLoggedInVar } from '../api/cache';

const useLogin = () => {
  const history = useHistory();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signIn);
      isLoggedInVar(true);
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