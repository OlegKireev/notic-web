import { useMutation } from '@apollo/client';
import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CREATE_NOTE, GET_NOTE_FEED, GET_MY_NOTES } from '../api/note';
import NoteForm from '../components/NoteForm';

const CreateNote = () => {
  const history = useHistory();
  const [ data, { loading, error }] = useMutation(CREATE_NOTE, {
    // Обновляем кеш Apollo
    refetchQueries: [{
       query: GET_NOTE_FEED
    }, {
      query: GET_MY_NOTES
    }],
    onCompleted: (data) => {
      history.push(`note/${data.createNote.id}`);
    }
  });

  useEffect(() => {
    document.title = 'Create Note — Notic';
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