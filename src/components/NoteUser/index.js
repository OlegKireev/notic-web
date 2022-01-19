import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';
import { GET_ME } from '@/api/user';
import DeleteNote from '../DeleteNote';
import FavoriteNote from '../FavoriteNote';

const NoteUser = ({ note }) => {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <Preloader loading={loading} />;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <FavoriteNote
        me={data.me}
        noteId={note.id}
        favoriteCount={note.favoriteCount}
      />
      {data.me.id === note.author.id && (
        <Fragment>
          <Link to={`/edit-note/${note.id}`}>Edit</Link>
          <DeleteNote id={note.id} />
        </Fragment>
      )}
    </div>
  )
};

export default NoteUser;