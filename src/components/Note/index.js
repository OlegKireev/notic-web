import React from 'react';
import ReactMarkdown from 'react-markdown';

const Note = ({ data }) => {
  return (
    <article>
      <img src={data.author.avatar} alt={`${data.author.username} avatar`} height={25} />
      <div>
        <span>{data.author.username}</span>{' '}
        <span>{data.favoriteCount}</span>{' '}
        <time dateTime={data.createdAt}>{data.createdAt}</time>
      </div>
      <ReactMarkdown source={data.content} />
    </article>
  )
};

export default Note;