import React, { Fragment, useEffect, useState } from 'react';
import UserForm from '@/components/UserForm';
import { SIGNUP_USER } from '@/api/auth';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { isLoggedInVar } from '../api/cache';

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
  const history = useHistory();

  const [formData, setFormData] = useState(createFormEmptyState(signUpControls));

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      // Обновляем локальный кэш Apollo
      isLoggedInVar(true);
      history.push('/');
    }
  });

  useEffect(() => {
    document.title = 'Sign Up — Notic';
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
      <UserForm 
        data={formData}
        controls={signUpControls}
        loading={loading}
        error={error}
        submitText="Register"
        onInputsChange={handleFormInputChange}
        onSubmit={handleFormSubmit}  
      >Sign Up:</UserForm>
    </Fragment>
  );
};

export default SignUp;