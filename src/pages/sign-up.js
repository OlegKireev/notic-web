import React, { Fragment, useEffect, useState } from 'react';
import LoginForm from '@/components/LoginForm';

const signUpControls = {
  name: {
    id: 'name',
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
    console.log(formData);
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