import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

const NoteList = ({ data, loading }) => (
  <Fragment>
    {loading
      ? <span>Loading...</span>
      : (
        <ul>
          {data.map((note) => (
            <li key={note.id}>
              <ReactMarkdown source={note.content} />
            </li>
          ))}
        </ul>
      )
    }

  </Fragment>
)

export default NoteList;