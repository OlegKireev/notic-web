import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Wrapper, Note, LoadMoreButton } from './styled';
import MasonryLayout from '../MasonryLayout';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      username: PropTypes.string,
    }),
    content: PropTypes.string,
    createdAt: PropTypes.string,
    favoriteCount: PropTypes.number,
  })),
  hasMore: PropTypes.bool,
  onLoadMoreClick: PropTypes.func,
};
const defaultProps = {
  data: [],
  hasMore: false,
  onLoadMoreClick: () => {},
}

function NoteList({ data, hasMore, onLoadMoreClick }) {
  const history = useHistory();

  const handleNoteClick = (id) => (e) => {
    const interactiveTags = ['A', 'BUTTON'];
    if (interactiveTags.includes(e.target.tagName)) { return; }
    history.push(`/note/${id}`);
  };

  return (
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
                onClick={handleNoteClick(note.id)}
              />
            ))}
          </MasonryLayout>
        )}
      {hasMore && <LoadMoreButton onClick={() => onLoadMoreClick()}>Load more...</LoadMoreButton>}
    </Wrapper>
  );
}

NoteList.propTypes = propTypes;
NoteList.defaultProps = defaultProps;

export default NoteList;
