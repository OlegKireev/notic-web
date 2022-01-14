import React from 'react';
import Button from '../Button';
import { Wrapper, Input } from './styled';

const LoginForm = ({}) => {
  return (
    <Wrapper>
      <form>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
          label="Username:"
        />
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          required
          label="Email:"
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          label="Password:"
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </Wrapper>
  )
};

export default LoginForm;