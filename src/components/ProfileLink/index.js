import React from 'react';

const ProfileLink = ({
  data
}) => {
  const { username, avatar } = data;
  return (
    <div>
      {username}
    </div>
  )
};

export default ProfileLink;