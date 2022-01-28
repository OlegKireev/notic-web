import React, { useState } from 'react';
import Button from '../Button/styled';
import { Wrapper, Form, StyledTextarea } from './styled';

const NoteForm = ({ 
  content,
  action,
 }) => {
  const [value, setValue] = useState({content: content || ''});
  const handleTextAreaChange = (e) => setValue({
    ...value,
    [e.target.name]: e.target.value,
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    action({
      variables: {
        ...value,
      },
    })
  }

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <StyledTextarea 
          required
          type="text"
          name="content"
          placeholder="Note content"
          rows="10"
          value={value.content}
          onChange={handleTextAreaChange}
        />
        <Button type='submit'>Save</Button>
      </Form>
    </Wrapper>
  )
};

export default NoteForm;