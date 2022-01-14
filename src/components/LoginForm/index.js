import React from 'react';
import Button from '../Button';
import { Wrapper, Input } from './styled';

const LoginForm = ({
  data,
  onInputsChange,
  onSubmit,
}) => {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
          label="Username:"
          value={data.username}
          onChange={onInputsChange}
        />
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          required
          label="Email:"
          value={data.email}
          onChange={onInputsChange}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          label="Password:"
          value={data.password}
          onChange={onInputsChange}
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </Wrapper>
  )
};

export default LoginForm;