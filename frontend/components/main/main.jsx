import React from "react";
import { Switch, Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../utils/auth_utils";
import Home from "./home";
import TrackIndex from "./tracks/track_index_container";

const Main = () => (
  <main>
    <div className="content">
      <Switch>
        <ProtectedRoute path="/tracks" component={TrackIndex} />
        <AuthRoute path="/" component={Home} />
      </Switch>
    </div>
  </main>
);

export default Main;
