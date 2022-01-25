import React from 'react';
import { Wrapper, Avatar, Username } from './styled';

const ProfileLink = ({
  data
}) => {
  const { username, avatar } = data;
  return (
    <Wrapper>
      <Avatar src={avatar} alt={`${username} avatar`}/>
      <Username>
        {username}
      </Username>
    </Wrapper>
  )
};

export default ProfileLink;