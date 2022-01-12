import React, { Fragment, useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes — Notedly';
  });
  return (
    <Fragment>
      <p>These are my notes</p>
    </Fragment>
  );
};

export default MyNotes;