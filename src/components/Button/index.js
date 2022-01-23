import React from 'react';
import StyledButton, { ButtonDanger, GhostButton } from "./styled";
import IconClose from '@/Icons/Close';

const Button = ({kind, ...props}) => {
  if (kind === 'danger') return <ButtonDanger {...props}/>
  if (kind === 'close') return (
    <GhostButton {...props}>
      <IconClose />
    </GhostButton>
  )
  return ( 
  <StyledButton {...props} />
)}

export default Button;