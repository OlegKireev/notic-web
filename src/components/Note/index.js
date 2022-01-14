import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns'
import { Wrapper, Author, Avatar, MetaInfo } from './styled';
import { Link } from 'react-router-dom';

const Note = ({ data }) => {
  const formatedDate = format(data.createdAt, 'MMM Do YYYY');

  return (
    <Wrapper>
      <Author>
        <Avatar src={data.author.avatar} alt={`${data.author.username} avatar`} height={25} />
        <span>{data.author.username}</span>{' '}
      </Author>
      <ReactMarkdown source={data.content} />
      <MetaInfo>
        <span>Favorites: {data.favoriteCount}</span>
        <time dateTime={data.createdAt}>{formatedDate}</time>
      </MetaInfo>
      <Link to={`/note/${data.id}`}>Permalink</Link>
    </Wrapper>
  )
};

export default Note;