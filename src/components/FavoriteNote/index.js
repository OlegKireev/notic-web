import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { GET_MY_FAVORITES, TOGGLE_FAVORITE } from '../../api/note';
import Button from '../Button';

const FavoriteNote = ({
  me,
  noteId,
  favoriteCount,
}) => {
  const [count, setCount] = useState(favoriteCount);
  const [isFavorited, setIsFavorited] = useState(
    me.favoriteNotes.includes((note) => note.id === noteId)
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: noteId
    },
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });

  const handleButton = () => {
    toggleFavorite();
    setIsFavorited(!isFavorited);
    setCount(isFavorited ? count - 1 : count + 1);
  };

  return (
    <Button 
      onClick={handleButton}
    >
      {isFavorited
        ? "Remove from favorites" 
        : "Add to favorites"
      }
      : {count}
    </Button>
  )
};

export default FavoriteNote;