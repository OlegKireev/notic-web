import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/styled';
import { Wrapper, Form, StyledTextarea } from './styled';

const propTypes = {
  content: PropTypes.string,
  action: PropTypes.func,
};
const defaultProps = {
  content: '',
  action: () => {},
};

function NoteForm({
  content,
  action,
}) {
  const [value, setValue] = useState({ content });
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
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <StyledTextarea
          required
          type="text"
          name="content"
          placeholder="Note content"
          rows="10"
          id="note-edit-form"
          value={value.content}
          onChange={handleTextAreaChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
}

NoteForm.propTypes = propTypes;
NoteForm.defaultProps = defaultProps;

export default NoteForm;
