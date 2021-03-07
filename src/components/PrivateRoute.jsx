import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { AuthContext } from "./AuthProvider";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};
