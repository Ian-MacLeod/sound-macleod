import React from "react";
import { Link } from "react-router-dom";

import { formatDuration } from "../../../utils/time_utils";
import ImageDefault from "../../image_default";
import PlayPauseButton from "../../play_pause_button/play_pause_button_container";

const TrackIndexItem = ({
  track,
  user,
  isOwnTrack,
  deleteTrack,
  playPausePlayer,
  isPlaying
}) => (
  <li className={isPlaying ? "playing" : ""}>
    <Link to={`/tracks/${track.id}`}>
      <ImageDefault className="track-img" src={track.image.url} />
    </Link>
    <div className="track-details">
      <div className="top-info">
        <PlayPauseButton trackId={track.id} />
        <p className="created-at">{track.createdAt}</p>
        <p className="username" onClick={e => e.stopPropagation()}>
          {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : ""}
        </p>
        <p className="track-title" onClick={e => e.stopPropagation()}>
          <Link to={`/tracks/${track.id}`}>{track.title}</Link>
        </p>
      </div>
      <div className="waveform" />
      <div className="action-buttons">
        {isOwnTrack ? (
          <button onClick={deleteTrack} className="delete">
            <i className="icon delete-icon" />
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  </li>
);

export default TrackIndexItem;
