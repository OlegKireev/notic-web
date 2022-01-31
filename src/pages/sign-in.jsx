import React, { useEffect, useState } from 'react';
import UserForm from '@/components/UserForm';
import useLogin from '../hooks/useLogin';

const signInControls = {
  login: {
    id: 'login',
    label: 'Login:',
    placeholder: 'jonh89 or jonhmalcovich@gmail.com',
  },
  password: {
    id: 'password',
    label: 'Password:',
    required: true,
    type: 'password',
  },
};

const createFormEmptyState = (controls) => Object
  .keys(controls)
  .reduce((acc, key) => ({ ...acc, [key]: '' }), {});

function SignIn() {
  const { signIn, loading, error } = useLogin();

  const [formData, setFormData] = useState(createFormEmptyState(signInControls));

  useEffect(() => {
    document.title = 'Sign In — Notic';
  }, []);

  const handleFormInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginType = formData.login.indexOf('@') >= 0 ? 'email' : 'username';
    signIn({
      variables: {
        ...formData,
        [loginType]: formData.login,
      },
    });
  };

  return (
    <UserForm
      data={formData}
      controls={signInControls}
      submitText="Login"
      loading={loading}
      error={error}
      onInputsChange={handleFormInputChange}
      onSubmit={handleFormSubmit}
    >
      Sign In:
    </UserForm>
  );
}

export default SignIn;
