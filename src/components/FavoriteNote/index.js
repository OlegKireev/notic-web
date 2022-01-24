import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_MY_FAVORITES, TOGGLE_FAVORITE } from '@/api/note';
import IconStar from '@/Icons/Star';
import Button from '../Button';
import IconStarOutline from '@/Icons/StarOutline';

const FavoriteNote = ({
  me,
  noteId,
  favoriteCount,
}) => {
  const [count, setCount] = useState(favoriteCount);
  const [isFavorited, setIsFavorited] = useState(
    me.favoriteNotes.map((note) => note.id).includes(noteId)
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
      kind="ghost"
      onClick={handleButton}
    >
      {isFavorited
        ? <IconStar />
        : <IconStarOutline />
      }
      {count}
    </Button>
  )
};

export default FavoriteNote;