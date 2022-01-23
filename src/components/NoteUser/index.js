import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';
import { GET_ME } from '@/api/user';
import FavoriteNote from '../FavoriteNote';
import { Wrapper } from './styled';
import Button from '../Button/styled';

const NoteUser = ({ 
  note,
  onRemoveModalOpenerClick,
 }) => {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <Preloader loading={loading} />;
  if (error) return <p>{error.message}</p>;
  return (
    <Wrapper>
      <FavoriteNote
        me={data.me}
        noteId={note.id}
        favoriteCount={note.favoriteCount}
      />
      {data.me.id === note.author.id && (
        <Fragment>
          <Link to={`/edit-note/${note.id}`}>Edit</Link>
          <Button
            onClick={onRemoveModalOpenerClick}
          >
            Delete
          </Button>
        </Fragment>
      )}
    </Wrapper>
  )
};

export default NoteUser;