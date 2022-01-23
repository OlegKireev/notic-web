import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns'
import { Wrapper, Header, Author, Avatar, CreatedTime, MetaInfo } from './styled';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';
import useAuth from '@/hooks/useAuth';
import NoteUser from '../NoteUser';

const Note = ({ data, ...props }) => {;
  const { isLoggedIn, loading, error } = useAuth();
  const formatedDate = format(data.createdAt, 'MMM Do YYYY');

  if (loading) return <Preloader loading={loading}/>;
  if (error) return <p>{error.message}</p>;
  return (
    <Wrapper {...props}>
      <Header>
        <Author>
          <Avatar src={data.author.avatar} alt={`${data.author.username} avatar`} height={25} />
          <span>{data.author.username}</span>{' '}
        </Author>
        <CreatedTime dateTime={data.createdAt}>
          {formatedDate}
        </CreatedTime>
      </Header>
      <ReactMarkdown>{data.content}</ReactMarkdown>
      <MetaInfo>
        {!isLoggedIn && (
          <span>Favorites: {data.favoriteCount}</span>
        )}
      </MetaInfo>
      {isLoggedIn && (
        <NoteUser note={data} />
      )}
    </Wrapper>
  )
};

export default Note;