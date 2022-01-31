import React from 'react';
import PropTypes from 'prop-types';
import StyledButton, { ButtonDanger, ButtonGhost } from './styled';

const propTypes = {
  kind: PropTypes.string,
};
const defaultProps = {
  kind: '',
};

function Button({ kind, ...props }) {
  let ButtonComponent = StyledButton;
  switch (kind) {
    case 'danger':
      ButtonComponent = ButtonDanger;
      break;
    case 'ghost':
      ButtonComponent = ButtonGhost;
      break;
    default:
      break;
  }

  return (
    <ButtonComponent {...props} />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
