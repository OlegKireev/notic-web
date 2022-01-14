import React from 'react';
import Preloader from '../Preloader';
import Note from '../Note';
import { Wrapper, List, LoadMoreButton } from './styled';

const NoteList = ({ data, loading, hasMore, onLoadMoreClick }) => (
  <Preloader loading={loading}>
    <Wrapper>
      <List>
        {data.map((note) => (
          <Note data={note} key={note.id} />
        ))}
      </List>
      {hasMore && <LoadMoreButton onClick={() => onLoadMoreClick()}>Load more...</LoadMoreButton>}
    </Wrapper>
  </Preloader>
)

export default NoteList;