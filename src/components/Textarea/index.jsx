import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea } from './styled';

const propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};
const defaultProps = {
  label: '',
};

function Textarea({ label, id, ...props }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledTextarea
        id={id}
        {...props}
      />
    </div>
  );
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
