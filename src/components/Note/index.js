import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns'
import { Wrapper, Author, Avatar, MetaInfo } from './styled';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';
import useAuth from '@/hooks/useAuth';
import NoteUser from '../NoteUser';

const Note = ({ data }) => {
  const { isLoggedIn, loading, error } = useAuth();
  const formatedDate = format(data.createdAt, 'MMM Do YYYY');

  if (loading) return <Preloader loading={loading}/>;
  if (error) return <p>{error.message}</p>;
  return (
    <Wrapper>
      <Author>
        <Avatar src={data.author.avatar} alt={`${data.author.username} avatar`} height={25} />
        <span>{data.author.username}</span>{' '}
      </Author>
      <ReactMarkdown>{data.content}</ReactMarkdown>
      <MetaInfo>
        <span>Favorites: {data.favoriteCount}</span>
        <time dateTime={data.createdAt}>{formatedDate}</time>
      </MetaInfo>
      <Link to={`/note/${data.id}`}>Permalink</Link>
      {isLoggedIn && (
        <NoteUser note={data} />
      )}
    </Wrapper>
  )
};

export default Note;