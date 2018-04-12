import React from "react";
import { Link } from "react-router-dom";
import { SortableElement } from "react-sortable-hoc";

import ImageDefault from "../../image_default";

const TrackItem = SortableElement(({ track, user, trackNum }) => (
  <li class="playlist-track-index-item in-form">
    <div className="track-img">
      <Link to={`/tracks/${track.id}`}>
        <ImageDefault src={track.image.url} />
      </Link>
    </div>
    <p className="details">
      <span className="track-num">{trackNum}</span>
      <span className="username">{user.username}</span>
      <span className="dash">—</span>
      <span className="title">{track.title}</span>
    </p>
    <div className="actions">
      <div class="remove" />
    </div>
  </li>
));

export default TrackItem;
