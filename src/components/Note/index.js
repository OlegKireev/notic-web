import React, { Fragment, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns'
import { Wrapper, Header, Author, Avatar, CreatedTime, MetaInfo, ModalControls, ModalParagraph } from './styled';
import Preloader from '../Preloader';
import useAuth from '@/hooks/useAuth';
import NoteUser from '../NoteUser';
import Modal from '../Modal';
import Button from '../Button/';
import DeleteNote from '../DeleteNote';

const Note = ({ data, ...props }) => {;
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const { isLoggedIn, loading, error } = useAuth();
  const formatedDate = format(data.createdAt, 'MMM Do YYYY');

  const handleRemoveModalOpenerClick = () => setIsShowDeleteModal(true);
  const handleRemoveModalCloserClick = () => setIsShowDeleteModal(false);

  if (loading) return <Preloader loading={loading}/>;
  if (error) return <p>{error.message}</p>;
  return (
    <Fragment>
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
          <NoteUser 
            note={data}
            onRemoveModalOpenerClick={handleRemoveModalOpenerClick}  
          />
        )}
        <Modal
          isActive={isLoggedIn && isShowDeleteModal}
          footer={(
            <ModalControls>
              <Button
                onClick={handleRemoveModalCloserClick}
              >
                Cancel
              </Button>
              <DeleteNote id={data.id} />
            </ModalControls>
          )}
          onClose={handleRemoveModalCloserClick}
        >
          <ModalParagraph>
            Delete this note?
          </ModalParagraph>
        </Modal>
      </Wrapper>
    </Fragment>
  )
};

export default Note;