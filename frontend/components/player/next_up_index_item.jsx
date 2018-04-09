import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { Link } from "react-router-dom";

import PlayPauseButton from "../play_pause_button/play_pause_button_container";
import ImageDefault from "../image_default";

const NextUpIndexItem = SortableElement(({ track, user, removeFromNextUp }) => (
  <li className="next-up-list-item">
    <div className="image">
      <ImageDefault src={track.image.url} />
      <PlayPauseButton trackId={track.id} />
    </div>
    <div className="info">
      <p>
        <Link to={`/users/${user.id}`} className="username">
          {user.username}
        </Link>
      </p>
      <p>
        <Link to={`/tracks/${track.id}`} className="title">
          {track.title}
        </Link>
      </p>
    </div>
    <a onClick={removeFromNextUp} className="remove">
      ×
    </a>
  </li>
));

export default NextUpIndexItem;
