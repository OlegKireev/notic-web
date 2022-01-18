import React, { Fragment, useEffect } from 'react';
import NoteForm from '../components/NoteForm';

const CreateNote = () => {
  useEffect(() => {
    document.title = 'Create Note — Notedly';
  });

  return (
    <Fragment>
      <NoteForm />
    </Fragment>
  );
};

export default CreateNote;