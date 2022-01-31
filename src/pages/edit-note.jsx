import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_NOTE } from '@/api/note';
import Preloader from '@/components/Preloader';
import NoteForm from '../components/NoteForm';
import { GET_ME } from '../api/user';
import { EDIT_NOTE } from '../api/note';

const propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

function EditNote({ match }) {
  const history = useHistory();

  const [isAccessAllowed, setIsAccessAllowed] = useState(false);

  const { id } = match.params;

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });
  const { data: userData } = useQuery(GET_ME);

  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id,
    },
    onCompleted: () => {
      history.push(`/note/${id}`);
    },
  });
  useEffect(() => {
    if (error) {
      console.error(error.message);
    }
  }, [error]);
  useEffect(() => {
    if (!data || !userData) return;
    setIsAccessAllowed(userData.me.id === data.note.author.id);
  }, [data, userData]);

  if (!isAccessAllowed) return <p>You don&apos;t have access to edit this note</p>;
  if (loading) return <Preloader />;
  if (error) return <p>Note not found.</p>;
  return (
    <NoteForm content={data.note.content} action={editNote} />
  );
}

EditNote.propTypes = propTypes;

export default EditNote;
