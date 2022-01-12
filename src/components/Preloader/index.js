import React, { Fragment } from 'react';

const Preloader = ({ loading, children }) => {
  return (
    <Fragment>
      {loading
        ? <span>Loading...</span>
        : children
      }
    </Fragment>
  )
};

export default Preloader;