import React from "react";
import { Link } from "react-router-dom";

import { formatDuration } from "../../../utils/time_utils";
import ImageDefault from "../../image_default";
import LikeButton from "../../like_button/like_button_container";
import PlayPauseButton from "../../play_pause_button/play_pause_button_container";

const TrackIndexItem = ({
  track,
  user,
  isOwnTrack,
  deleteTrack,
  isPlaying,
  addToNextUp,
  likeTrack,
  unlikeTrack
}) => (
  <li className={isPlaying ? "playing" : ""}>
    <div className="track-img">
      <ImageDefault src={track.image.url} />
      <PlayPauseButton trackId={track.id} />
    </div>
    <div className="track-details">
      <p className="username" onClick={e => e.stopPropagation()}>
        {user ? <Link to={`/users/${user.id}`}>{user.username}</Link> : ""}
      </p>
      <p className="track-title" onClick={e => e.stopPropagation()}>
        <Link to={`/tracks/${track.id}`}>{track.title}</Link>
      </p>
      <div className="stats">
        <div className="single-stat">
          <i className="icon like-icon grey" />
          {track.numLikes}
        </div>
        <div className="single-stat">
          <i className="icon comment-icon grey" />
          {track.numComments}
        </div>
      </div>

      <LikeButton trackId={track.id} isButtonWrap={true} />
    </div>
  </li>
);

export default TrackIndexItem;
