import React from 'react';
import { StyledInput } from './styled';

const Input = ({label, id, ...props}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput 
        id={id}
        {...props}
      />
    </div>
  )
}

export default Input;