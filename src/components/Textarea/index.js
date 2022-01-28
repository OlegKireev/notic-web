import React from 'react';
import { StyledTextarea } from './styled';

const Textarea = ({label, id, ...props}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledTextarea 
        id={id}
        {...props}
      />
    </div>
  )
}

export default Textarea;