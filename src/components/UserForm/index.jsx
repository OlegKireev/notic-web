import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Preloader from '../Preloader';
import { Wrapper, Input } from './styled';

const propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    login: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  controls: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
  })).isRequired,
  submitText: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onInputsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const defaultProps = {
  children: null,
  submitText: '',
  loading: false,
  error: '',
};

function UserForm({
  children,
  data,
  controls,
  submitText,
  loading,
  error,
  onInputsChange,
  onSubmit,
}) {
  return (
    <Wrapper>
      <h3>{children}</h3>
      <form onSubmit={onSubmit}>
        {Object.keys(controls).map((key) => {
          const {
            id, type, label, placeholder, required,
          } = controls[key];
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
          );
        })}
        {loading && <Preloader />}
        {error && <span>{error.message}</span>}
        <Button type="submit">{submitText}</Button>
      </form>
    </Wrapper>
  );
}

UserForm.propTypes = propTypes;
UserForm.defaultProps = defaultProps;

export default UserForm;
