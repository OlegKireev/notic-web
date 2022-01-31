import React, { Fragment, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTE } from '@/api/note';
import Preloader from '@/components/Preloader';
import NoteComponent from '@/components/Note';

const Note = ({match}) => {
  const id = match.params.id;

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id }})
  
  useEffect(() => {
    if (error) {
      console.error(error.message);
    }
  }, [error])

  if (loading) return <Preloader />
  if (error) return <p>Note not found.</p>
  return (
    <NoteComponent data={data.note} />
  );
};

export default Note;