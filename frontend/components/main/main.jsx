import React from "react";
import { Switch, Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../utils/auth_utils";
import Home from "./home_container";
import Charts from "../charts/charts_container";
import TrackForm from "../tracks/track_form_container";
import TrackShow from "../tracks/track_show_container";
import UserProfile from "../users/user_profile_container";
import PlaylistShow from "../playlists/playlist_show_container";
import SearchIndex from "../search/search_index_container";

const Main = () => (
  <main>
    <div className="content">
      <Switch>
        <ProtectedRoute path="/search/:model/:query" component={SearchIndex} />
        <ProtectedRoute path="/tracks/:trackId" component={TrackShow} />
        <ProtectedRoute path="/tracks" component={Charts} />
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
