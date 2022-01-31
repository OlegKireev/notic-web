import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Avatar, Username } from './styled';

const propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    id: PropTypes.string,
    username: PropTypes.string,
    favoriteNotes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }).isRequired,
};

function ProfileLink({
  data,
}) {
  const { username, avatar } = data;
  return (
    <Wrapper>
      <Avatar src={avatar} alt={`${username} avatar`} />
      <Username>
        {username}
      </Username>
    </Wrapper>
  );
}

ProfileLink.propTypes = propTypes;

export default ProfileLink;
