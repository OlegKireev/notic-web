import React from 'react';
import Preloader from '../Preloader';
import { Wrapper, Note, LoadMoreButton } from './styled';
import MasonryLayout from '../MasonryLayout';
import { useHistory } from 'react-router-dom';

const NoteList = ({ data, loading, hasMore, onLoadMoreClick }) => {
  const history = useHistory();

  return (
    <Preloader loading={loading}>
      <Wrapper>
        {!data.length
          ? (
            <p>No notes yet</p>
          )
          : (
            <MasonryLayout>
              {data.map((note) => (
                <Note 
                  key={note.id}
                  data={note}
                  tabIndex="0"
                  role="link"
                  onClick={() => {
                    history.push(`/note/${note.id}`);
                  }}
                />
              ))}
            </MasonryLayout>
          )
        }
        {hasMore && <LoadMoreButton onClick={() => onLoadMoreClick()}>Load more...</LoadMoreButton>}
      </Wrapper>
    </Preloader>
  )
}

export default NoteList;