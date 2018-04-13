import React from "react";
import { Switch, Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../utils/auth_utils";
import Home from "./home_container";
import ChartsTrackIndex from "../tracks/charts/track_index_container";
import TrackForm from "../tracks/track_form_container";
import TrackShow from "../tracks/track_show_container";
import UserProfile from "../users/user_profile_container";
import PlaylistShow from "../playlists/playlist_show_container";

const Main = () => (
  <main>
    <div className="content">
      <Switch>
        <ProtectedRoute path="/tracks/:trackId" component={TrackShow} />
        <ProtectedRoute path="/tracks" component={ChartsTrackIndex} />
        <ProtectedRoute path="/upload" component={TrackForm} />
        <ProtectedRoute path="/users/:userId" component={UserProfile} />
        <ProtectedRoute
          path="/playlists/:playlistId"
          component={PlaylistShow}
        />
        <AuthRoute path="/" component={Home} />
      </Switch>
    </div>
  </main>
);

export default Main;
