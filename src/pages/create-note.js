import { useMutation } from '@apollo/client';
import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CREATE_NOTE, GET_NOTE_FEED } from '../api/note';
import NoteForm from '../components/NoteForm';

const CreateNote = () => {
  const history = useHistory();
  const [ data, { loading, error }] = useMutation(CREATE_NOTE, {
    // Обновляем кеш Apollo
    refetchQueries: [{
       query: GET_NOTE_FEED
    }],
    onCompleted: (data) => {
      history.push(`note/${data.createNote.id}`);
    }
  });

  useEffect(() => {
    document.title = 'Create Note — Notedly';
  });
  
  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note</p>}
      <NoteForm action={data}/>
    </Fragment>
  );
};

export default CreateNote;