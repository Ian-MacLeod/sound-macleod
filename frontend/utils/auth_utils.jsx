import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/tracks" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Bool = ({
  loggedInComponent: TrueComponent,
  loggedOutComponent: FalseComponent,
  loggedIn
}) => (loggedIn ? <TrueComponent /> : <FalseComponent />);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const BooleanComponent = withRouter(connect(mapStateToProps)(Bool));
