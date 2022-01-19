import React from 'react';
import { Link } from 'react-router-dom';

const NoteUser = ({ note }) => {
  return <Link to={`/edit/${note.id}`}>Edit</Link>;
};

export default NoteUser;