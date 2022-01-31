import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled';

const propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};
const defaultProps = {
  label: '',
};

function Input({ label, id, ...props }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        {...props}
      />
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
