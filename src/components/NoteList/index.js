import React from 'react';
import Preloader from '../Preloader';
import Note from '../Note';

const NoteList = ({ data, loading }) => (
  <Preloader loading={loading}>
    <div>
      {data.map((note) => (
        <Note data={note} key={note.id} />
      ))}
    </div>
  </Preloader>
)

export default NoteList;