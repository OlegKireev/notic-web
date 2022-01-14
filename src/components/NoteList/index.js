import React from 'react';
import Preloader from '../Preloader';
import Note from '../Note';
import { List } from './styled';
import Button from '../Button/styled';

const NoteList = ({ data, loading, hasMore, onLoadMoreClick }) => (
  <Preloader loading={loading}>
    <List>
      {data.map((note) => (
        <Note data={note} key={note.id} />
      ))}
    </List>
    {hasMore && <Button onClick={() => onLoadMoreClick()}>Load more...</Button>}
  </Preloader>
)

export default NoteList;