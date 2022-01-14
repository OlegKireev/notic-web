import React, { Fragment, useEffect, useState } from 'react';
import LoginForm from '@/components/LoginForm';
import { SIGNUP_USER } from '@/api/auth';
import { useMutation } from '@apollo/client';

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
  .keys(signUpControls)
  .reduce((acc, key) => {
    return { ...acc, [key]: ''};
  }, {});
};

const SignUp = () => {
  const [formData, setFormData] = useState(createFormEmptyState(signUpControls));

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => console.log(data.signUp)
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