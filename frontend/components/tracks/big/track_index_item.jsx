import React from "react";
import { Link } from "react-router-dom";

import { formatDuration } from "../../../utils/time_utils";
import ImageDefault from "../../image_default";
import PlayPauseButton from "../../play_pause_button/play_pause_button_container";
import WaveForm from "../../wave_form/wave_form_container";

const TrackIndexItem = ({
  track,
  user,
  isOwnTrack,
  deleteTrack,
  isPlaying,
  addToNextUp,
  likeTrack,
  unlikeTrack,
  addToPlaylist,
  isLoggedIn,
  openSignUpModal,
  signInDemoUser
}) => (
  <li className={isPlaying ? "playing" : ""}>
    {isLoggedIn || (
      <div onClick={openSignUpModal} className="logged-out-overlay">
        <p>
          Sign up or use a{" "}
          <span onClick={signInDemoUser} className="demo-login">
            demo account
          </span>{" "}
          to listen
        </p>
      </div>
    )}
    <Link className="track-img" to={`/tracks/${track.id}`}>
      <ImageDefault src={track.image.url} />
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
      <WaveForm track={track} height={60} waveColor="#666" />
      <div className="action-buttons">
        {track.isLiked ? (
          <button className="liked" onClick={unlikeTrack}>
            <i className="icon like-icon" />
            {track.numLikes}
          </button>
        ) : (
          <button onClick={likeTrack}>
            <i className="icon like-icon" />
            {track.numLikes}
          </button>
        )}
        <button onClick={addToNextUp}>Add to Next Up</button>
        <button onClick={addToPlaylist}>Add to playlist</button>
        {isOwnTrack ? (
          <button onClick={deleteTrack}>
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
