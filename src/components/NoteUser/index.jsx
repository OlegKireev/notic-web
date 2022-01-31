import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import Preloader from '../Preloader';
import { GET_ME } from '@/api/user';
import FavoriteNote from '../FavoriteNote';
import { Wrapper, EditLink, DeleteButton } from './styled';
import IconDelete from '@/Icons/Delete';
import IconEdit from '@/Icons/Edit';

const propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      username: PropTypes.string,
    }),
    content: PropTypes.string,
    createdAt: PropTypes.string,
    favoriteCount: PropTypes.number,
  }).isRequired,
  onRemoveModalOpenerClick: PropTypes.func,
};
const defaultProps = {
  onRemoveModalOpenerClick: () => {},
};

function NoteUser({
  note,
  onRemoveModalOpenerClick,
}) {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return <Preloader />;
  if (error) return <p>{error.message}</p>;
  return (
    <Wrapper>
      <FavoriteNote
        me={data.me}
        noteId={note.id}
        favoriteCount={note.favoriteCount}
      />
      {data.me.id === note.author.id && (
        <>
          <EditLink to={`/edit-note/${note.id}`}>
            <IconEdit />
          </EditLink>
          <DeleteButton
            kind="ghost"
            onClick={onRemoveModalOpenerClick}
          >
            <IconDelete />
          </DeleteButton>
        </>
      )}
    </Wrapper>
  );
}

NoteUser.propTypes = propTypes;
NoteUser.defaultProps = defaultProps;

export default NoteUser;
