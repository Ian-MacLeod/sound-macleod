import React from "react";
import { Link } from "react-router-dom";

import { formatDuration } from "../../../utils/time_utils";

const TrackIndexItem = ({ track, user, idx }) => (
  <li>
    <div className="left">
      <div className="number">
        <p>{idx}</p>
        <div className="track-img" />
      </div>
      <div className="info">
        <p className="username">
          {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : ""}
        </p>
        <p className="track-title">
          <Link to={`/tracks/${track.id}`}>{track.title}</Link>
        </p>
      </div>
    </div>
    <div className="length">
      <p>{formatDuration(track.length)}</p>
    </div>
  </li>
);

export default TrackIndexItem;
