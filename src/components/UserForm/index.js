import React from 'react';
import Button from '../Button';
import Preloader from '../Preloader';
import { Wrapper, Input } from './styled';

const UserForm = ({
  children,
  data,
  controls,
  submitText,
  loading,
  error,
  onInputsChange,
  onSubmit,
}) => {
  return (
    <Wrapper>
      <h3>{children}</h3>
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
        <Preloader loading={loading} />
        {error && <span>{error.message}</span>}
        <Button type='submit'>{submitText}</Button>
      </form>
    </Wrapper>
  )
};

export default UserForm;