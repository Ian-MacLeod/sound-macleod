import React from "react";

import { Link } from "react-router-dom";

import ImageDefault from "../image_default";
import NextUpIndex from "./next_up_index_container";

const PlayerTrackDetails = ({ track, user, nextUp }) => (
  <div className="track-details">
    <div className="track-image">
      <ImageDefault src={track.image.url} />
    </div>
    <div className="info">
      <p className="username">
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </p>
      <p className="title">
        <Link to={`/tracks/${track.id}`}>{track.title}</Link>
      </p>
    </div>
    <div className="buttons">
      <div className="next-up">
        <i className="icon next-up-icon" />
        <NextUpIndex />
      </div>
    </div>
  </div>
);

export default PlayerTrackDetails;
