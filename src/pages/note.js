import React, { Fragment, useEffect } from 'react';
// import { useQuery, gql } from '@apollo/client';

const MyNotes = ({match}) => {
  return (
    <Fragment>
      <p>ID: {match.params.id}</p>
    </Fragment>
  );
};

export default MyNotes;