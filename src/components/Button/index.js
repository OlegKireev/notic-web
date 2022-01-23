import React from 'react';
import StyledButton, { ButtonDanger } from "./styled";

const Button = ({kind, ...props}) => {
  if (kind === 'danger') return <ButtonDanger {...props}/>
  return ( 
  <StyledButton {...props} />
)}

export default Button;