import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { GET_NOTE } from '@/api/note';
import Preloader from '@/components/Preloader';
import NoteComponent from '@/components/Note';

const propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

function Note({ match }) {
  const { id } = match.params;

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });

  useEffect(() => {
    if (error) {
      console.error(error.message);
    }
  }, [error]);

  if (loading) return <Preloader />;
  if (error) return <p>Note not found.</p>;
  return (
    <NoteComponent data={data.note} />
  );
}

Note.propTypes = propTypes;

export default Note;
