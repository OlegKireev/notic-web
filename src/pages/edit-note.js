import React, { Fragment, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_NOTE } from '@/api/note';
import Preloader from '@/components/Preloader';
import NoteForm from '../components/NoteForm';
import { GET_ME } from '../api/user';
import { EDIT_NOTE } from '../api/note';
import { useHistory } from 'react-router-dom';

const EditNote = ({match}) => {
  const history = useHistory();

  const [isAccessAllowed, setIsAccessAllowed] = useState(false);

  const id = match.params.id;

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id }})
  const { data: userData } = useQuery(GET_ME);

  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id
    },
    onCompleted: () => {
      history.push(`/note/${id}`)
    }
  })
  useEffect(() => {
    if (error) {
      console.error(error.message);
    }
  }, [error]);
  useEffect(() => {
    if (!data || !userData) return
    setIsAccessAllowed(userData.me.id === data.note.author.id)
  }, [data, userData])

  if (!isAccessAllowed) return <p>You don't have access to edit this note</p>

  return (
    <Fragment>
      {
        <Preloader loading={loading}>
          {error && <p>Note not found.</p>}
          {data && <NoteForm content={data.note.content} action={editNote} />}
        </Preloader>
      }
    </Fragment>
  );
};

export default EditNote;