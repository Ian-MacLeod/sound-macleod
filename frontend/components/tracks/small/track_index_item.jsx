import React from "react";
import { Link } from "react-router-dom";

import { formatDuration } from "../../../utils/time_utils";
import ImageDefault from "../../image_default";
import PlayPauseButton from "../../play_pause_button/play_pause_button_container";

const TrackIndexItem = ({ track, user, idx, playPausePlayer, isPlaying }) => (
  <li
    className={isPlaying ? "playing" : ""}
    onClick={() => playPausePlayer(track.id)}
  >
    <div className="left">
      <div className="number">
        <p>{idx}</p>
        <div className="track-img">
          <ImageDefault src={track.image.url} />
          <PlayPauseButton trackId={track.id} />
        </div>
      </div>
      <div className="info">
        <p className="username" onClick={e => e.stopPropagation()}>
          {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : ""}
        </p>
        <p className="track-title" onClick={e => e.stopPropagation()}>
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
