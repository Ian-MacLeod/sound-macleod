import React from "react";
import { Link } from "react-router-dom";

import { formatDuration } from "../../../utils/time_utils";
import ImageDefault from "../../image_default";
import PlayPauseButton from "../../play_pause_button/play_pause_button_container";

const TrackIndexItem = ({
  track,
  user,
  idx,
  showDelete,
  deleteTrack,
  playTrack,
  isPlaying
}) => {
  return (
    <li
      className={isPlaying ? "playing" : ""}
      onClick={() => playTrack(track.id)}
    >
      <div className="left">
        <div className="number">
          <p>{idx}</p>
          <div className="track-img">
            <ImageDefault src={track.image.url} />
            <PlayPauseButton />
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
        {showDelete ? (
          <div onClick={e => e.stopPropagation()}>
            <a onClick={deleteTrack} className="delete" />
          </div>
        ) : (
          ""
        )}
        <p>{formatDuration(track.length)}</p>
      </div>
    </li>
  );
};

export default TrackIndexItem;
