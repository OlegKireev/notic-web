import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_MY_NOTES } from '@/api/note';
import NoteList from '../components/NoteList';
import Preloader from '../components/Preloader';

const MyNotes = () => {
  const { data, loading, error } = useQuery(GET_MY_NOTES)

  useEffect(() => {
    document.title = 'My Notes — Notic';
  });
  if (loading) return <Preloader />;
  if (error) return `Error! ${error.message}`;
  return (
    <NoteList data={data.me.notes} />
  );
};

export default MyNotes;