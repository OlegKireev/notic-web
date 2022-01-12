import React, { Fragment, useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites — Notedly';
  });
  return (
    <Fragment>
      <p>These are my favorites</p>
    </Fragment>
  );
};

export default Favorites;