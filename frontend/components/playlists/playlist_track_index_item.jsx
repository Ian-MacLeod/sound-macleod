import React from "react";
import { Link } from "react-router-dom";

import LikeButton from "../like_button/like_button_container";
import NextUpButton from "../next_up_button/next_up_button_container";
import ImageDefault from "../image_default";
import PlayPauseButton from "../play_pause_button/play_pause_button_container";

const PlaylistTrackIndexItem = ({ track, user, trackNum, isPlaying }) => (
  <li className={"playlist-track-index-item " + (isPlaying ? "playing" : "")}>
    <div className="track-img">
      <Link to={`/tracks/${track.id}`}>
        <ImageDefault src={track.image.url} />
      </Link>
      <PlayPauseButton trackId={track.id} />
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
      <LikeButton isButtonWrap={true} trackId={track.id} />
      <NextUpButton isButtonWrap={true} trackIds={[track.id]} />
    </div>
  </li>
);

export default PlaylistTrackIndexItem;
