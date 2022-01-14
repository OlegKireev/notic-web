import React, { Fragment, useEffect } from 'react';
import LoginForm from '@/components/LoginForm';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign Up — Notedly';
  });
  return (
    <Fragment>
      <LoginForm />
    </Fragment>
  );
};

export default SignUp;