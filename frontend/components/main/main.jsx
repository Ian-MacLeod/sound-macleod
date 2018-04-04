import React from "react";
import { Switch, Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../utils/auth_utils";
import Home from "./home";
import TrackIndex from "./tracks/track_index_container";
import TrackForm from "./tracks/track_form_container";
import UserProfile from "./users/user_profile_container";

const Main = () => (
  <main>
    <div className="content">
      <Switch>
        <ProtectedRoute path="/tracks" component={TrackIndex} />
        <ProtectedRoute path="/upload" component={TrackForm} />
        <ProtectedRoute path="/users/:userId" component={UserProfile} />
        <AuthRoute path="/" component={Home} />
      </Switch>
    </div>
  </main>
);

export default Main;
