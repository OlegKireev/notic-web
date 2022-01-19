import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_MY_FAVORITES } from '../api/note';
import NoteList from '../components/NoteList';
import Preloader from '../components/Preloader';

const Favorites = () => {
  const { data, loading, error } = useQuery(GET_MY_FAVORITES);
  useEffect(() => {
    document.title = 'Favorites — Notedly';
  });
  if (loading) return <Preloader loading={loading}/>
  if (error) return <p>{error.message}</p>
  return (
    <NoteList data={data.me.favoriteNotes} />
  );
};

export default Favorites;