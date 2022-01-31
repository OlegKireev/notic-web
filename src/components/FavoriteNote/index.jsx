import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { GET_MY_FAVORITES, TOGGLE_FAVORITE } from '@/api/note';
import Button from '../Button';
import IconStar from '@/Icons/Star';
import IconStarOutline from '@/Icons/StarOutline';
import { FavoriteCounter } from './styled';

const propTypes = {
  me: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    favoriteNotes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }).isRequired,
  noteId: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number,
};
const defaultProps = {
  favoriteCount: 0,
};

function FavoriteNote({
  me,
  noteId,
  favoriteCount,
}) {
  const [count, setCount] = useState(favoriteCount);
  const [isFavorited, setIsFavorited] = useState(
    me.favoriteNotes.map((note) => note.id).includes(noteId),
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: noteId,
    },
    refetchQueries: [{ query: GET_MY_FAVORITES }],
  });

  const handleButton = () => {
    toggleFavorite();
    setIsFavorited(!isFavorited);
    setCount(isFavorited ? count - 1 : count + 1);
  };

  return (
    <Button
      kind="ghost"
      onClick={handleButton}
    >
      {isFavorited
        ? <IconStar />
        : <IconStarOutline />}
      <FavoriteCounter>
        {count}
      </FavoriteCounter>
    </Button>
  );
}

FavoriteNote.propTypes = propTypes;
FavoriteNote.defaultProps = defaultProps;

export default FavoriteNote;
