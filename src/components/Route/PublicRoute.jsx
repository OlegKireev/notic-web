import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '@/hooks/useAuth';
import Preloader from '../Preloader';

const propTypes = {
  component: PropTypes.node.isRequired,
};

function PublicRoute({ component: Component, ...rest }) {
  const { isLoggedIn, loading, error } = useAuth();
  if (loading) return <Preloader />;
  if (error) return <p>{error.message}</p>;
  return (
    <Route
      {...rest}
      render={(props) => (
        !isLoggedIn
          ? <Component {...props} />
          : (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          )
      )}
    />
  );
}

PublicRoute.propTypes = propTypes;

export default PublicRoute;
