import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTE_FEED } from '@/api/note';
import NoteList from '../components/NoteList';
import Preloader from '../components/Preloader';

function Home() {
  const [notes, setNotes] = useState([]);
  const {
    data, loading, error, fetchMore,
  } = useQuery(GET_NOTE_FEED, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    document.title = 'Notic';
  });

  useEffect(() => {
    if (!data || !data.noteFeed || !data.noteFeed.notes) {
      return;
    }
    setNotes(data.noteFeed.notes);
  }, [data]);

  const handleLoadMoreClick = () => {
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => ({
        noteFeed: {
          cursor: fetchMoreResult.noteFeed.cursor,
          hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
          notes: [
            ...prevResult.noteFeed.notes,
            ...fetchMoreResult.noteFeed.notes,
          ],
          __typename: 'noteFeed',
        },
      }),
    });
  };

  if (loading) return <Preloader />;
  if (error) return <p>{error.message}</p>;
  return (
    <NoteList
      data={notes}
      hasMore={data && data.noteFeed && data.noteFeed.hasNextPage}
      onLoadMoreClick={handleLoadMoreClick}
    />
  );
}

export default Home;
