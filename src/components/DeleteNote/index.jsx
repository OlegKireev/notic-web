import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { DELETE_NOTE, GET_MY_NOTES } from '../../api/note';
import Button from '../Button';

const propTypes = {
  id: PropTypes.string.isRequired,
};

function DeleteNote({ id }) {
  const history = useHistory();

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id,
    },
    refetchQueries: [{ query: GET_MY_NOTES }],
    onCompleted: () => {
      // Перенаправляем пользователя на страницу "my notes"
      history.push('/my-notes');
    },
  });

  return <Button kind="danger" onClick={deleteNote}>Delete Note</Button>;
}

DeleteNote.propTypes = propTypes;

export default DeleteNote;
