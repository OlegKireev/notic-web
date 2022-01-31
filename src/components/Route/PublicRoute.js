import React from 'react';
import { Redirect, Route } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Preloader from "../Preloader";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, loading, error } = useAuth();
  if (loading) return <Preloader />
  if (error) return <p>{error.message}</p>
  return (
    <Route
      {...rest}
      render={(props) => (
        !isLoggedIn
          ? <Component {...props}/>
          : <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
      )}
    />
  )
};

export default PublicRoute;