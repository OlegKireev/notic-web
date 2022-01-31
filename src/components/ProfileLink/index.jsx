import React from 'react';
import { Wrapper, Avatar, Username } from './styled';

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

export default ProfileLink;
