import React, { Fragment, useEffect, useState } from 'react';
import LoginForm from '@/components/LoginForm';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
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
    console.log(formData);
  };

  return (
    <Fragment>
      <LoginForm 
        data={formData}
        onInputsChange={handleFormInputChange}
        onSubmit={handleFormSubmit}  
      />
    </Fragment>
  );
};

export default SignUp;