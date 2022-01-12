import React from 'react';
import Preloader from '../Preloader';
import Note from '../Note';
import { List } from './styled';

const NoteList = ({ data, loading }) => (
  <Preloader loading={loading}>
    <List>
      {data.map((note) => (
        <Note data={note} key={note.id} />
      ))}
    </List>
  </Preloader>
)

export default NoteList;