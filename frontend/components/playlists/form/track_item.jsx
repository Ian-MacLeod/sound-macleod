import React from "react";
import { SortableElement } from "react-sortable-hoc";

const TrackItem = SortableElement(({ track, user, trackNum }) => (
  <li>
    <div className="track-img">
      <Link to={`/tracks/${track.id}`}>
        <ImageDefault src={track.image.url} />
      </Link>
    </div>
    <p className="details">
      <span className="track-num">{trackNum}</span>
      <Link className="username" to={`/users/${user.id}`}>
        {user.username}
      </Link>
      <span className="dash">—</span>
      <Link className="title" to={`/tracks/${track.id}`}>
        {track.title}
      </Link>
    </p>
    <div className="actions">
      <div class="remove" />
    </div>
  </li>
));

export default TrackItem;
