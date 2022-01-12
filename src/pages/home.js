import React, { useEffect, Fragment } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Notedly';
  });
  return (
    <Fragment>
      <p>Welcome to the Notedly app</p>
    </Fragment>
  );
};

export default Home;