import React, { useEffect, Fragment, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTE_FEED } from '@/api/note';
import NoteList from '../components/NoteList';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const { data, loading, error, fetchMore } = useQuery(GET_NOTE_FEED);

  useEffect(() => {
    document.title = 'Notedly';
  });

  useEffect(() => {
    console.log(data);
    if (!data || !data.noteFeed || !data.noteFeed.notes) {
      return;
    }
    setNotes(data.noteFeed.notes);
  }, [data]);

  return (
    <Fragment>
      <NoteList data={notes} />
    </Fragment>
  );
};

export default Home;