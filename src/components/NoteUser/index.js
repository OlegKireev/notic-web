import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';
import { GET_ME } from '@/api/user';
import DeleteNote from '../DeleteNote';

const NoteUser = ({ note }) => {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <Preloader loading={loading} />;
  if (error) return <p>{error.message}</p>;
  return data.me.id === note.author.id && (
    <div>
      <Link to={`/edit-note/${note.id}`}>Edit</Link>
      <DeleteNote id={note.id} />
    </div>
  )
};

export default NoteUser;