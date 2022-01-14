import React, { Fragment, useEffect, useState } from 'react';
import LoginForm from '@/components/LoginForm';
import { SIGNUP_USER } from '@/api/auth';
import { useMutation, useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const signUpControls = {
  username: {
    id: 'username',
    label: 'Username:',
    placeholder: 'jonh89',
    required: true,
  },
  email: {
    id: 'email',
    label: 'E-mail',
    placeholder: 'jonhmalcovich@gmail.com',
    required: true,
  },
  password: {
    id: 'password',
    label: 'Password:',
    required: true,
    type: 'password',
  }
};

const createFormEmptyState = (controls) => {
  return Object
  .keys(controls)
  .reduce((acc, key) => {
    return { ...acc, [key]: ''};
  }, {});
};

const SignUp = () => {
  const client = useApolloClient();
  const history = useHistory();

  const [formData, setFormData] = useState(createFormEmptyState(signUpControls));

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      // Обновляем локальный кэш Apollo
      client.writeData({ data: { isLoggedIn: true }});
      history.push('/');
    }
  });

  useEffect(() => {
    document.title = 'Sign Up — Notedly';
  }, []);

  const handleFormInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signUp({
      variables: {
        ...formData,
      }
    })
  };

  return (
    <Fragment>
      <LoginForm 
        data={formData}
        controls={signUpControls}
        onInputsChange={handleFormInputChange}
        onSubmit={handleFormSubmit}  
      />
    </Fragment>
  );
};

export default SignUp;