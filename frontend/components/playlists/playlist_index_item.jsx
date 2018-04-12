import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";
import PlayPauseButton from "../play_pause_button/play_pause_button_container";
import PlaylistTrackIndex from "./playlist_track_index";

const playlistIndexItem = ({ playlist, user }) => (
  <li class="playlist-item">
    {console.log(playlist)}
    <Link className="playlist-img" to={`/playlists/${playlist.id}`}>
      <ImageDefault src={playlist.image.url} />
    </Link>
    <div class="info">
      <div className="top-info">
        <p className="created-at">{playlist.createdAt}</p>
        <PlayPauseButton />
        <p className="username">
          <Link to={`/users/${user.id}`}>{user.username}</Link>
        </p>
        <p className="title">
          <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
        </p>
      </div>
      <PlaylistTrackIndex trackIds={playlist.trackIds} />
      <div className="action-buttons">
        <button className="edit">Edit Playlist</button>
        <button className="next-up">Add to Next Up</button>
      </div>
    </div>
  </li>
);

export default playlistIndexItem;
