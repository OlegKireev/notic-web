import React, { Fragment, useEffect } from 'react';
import Button from '../components/Button/styled';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign Up — Notedly';
  });
  return (
    <Fragment>
      <form>
        <label htmlFor='username'>Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </Fragment>
  );
};

export default SignUp;