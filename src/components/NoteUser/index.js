import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import Preloader from '../Preloader';
import { GET_ME } from '@/api/user';
import FavoriteNote from '../FavoriteNote';
import { Wrapper, EditLink, DeleteButton } from './styled';
import IconDelete from '@/Icons/Delete';
import IconEdit from '../../Icons/Edit';

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
          <EditLink to={`/edit-note/${note.id}`}>
            <IconEdit />
          </EditLink>
          <DeleteButton
            kind="ghost"
            onClick={onRemoveModalOpenerClick}
          >
            <IconDelete />
          </DeleteButton>
        </Fragment>
      )}
    </Wrapper>
  )
};

export default NoteUser;