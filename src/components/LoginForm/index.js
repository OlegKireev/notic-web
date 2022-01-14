import React from 'react';
import Button from '../Button';
import { Wrapper, Input } from './styled';

const LoginForm = ({
  data,
  controls,
  onInputsChange,
  onSubmit,
}) => {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        {Object.keys(controls).map((key) => {
          const {id, type, label, placeholder, required} = controls[key];
          return (
            <Input
              key={id}
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              required={required}
              label={label}
              value={data[id]}
              onChange={onInputsChange}
            />
          )
        })}
        <Button type='submit'>Sign up</Button>
      </form>
    </Wrapper>
  )
};

export default LoginForm;