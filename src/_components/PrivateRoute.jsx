import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '@/_services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // authorised so return component
      return <Component {...props} />;
    }}
  />
);
