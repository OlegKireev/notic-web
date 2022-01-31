import React from 'react';
import StyledButton, { ButtonDanger, ButtonGhost } from './styled';

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

export default Button;
