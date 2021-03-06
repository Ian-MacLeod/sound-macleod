import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";
import PlaylistPlayPauseButton from "../play_pause_button/playlist_play_pause_button_container";
import PlaylistTrackIndex from "./playlist_track_index";
import NextUpButton from "../next_up_button/next_up_button_container";

const playlistIndexItem = ({ playlist, user, isOwnPlaylist, editPlaylist }) => (
  <li className="playlist-item">
    <Link className="playlist-img" to={`/playlists/${playlist.id}`}>
      <ImageDefault src={playlist.image.url} />
    </Link>
    <div className="info">
      <div className="top-info">
        <p className="created-at">{playlist.createdAt}</p>
        <PlaylistPlayPauseButton playlistId={playlist.id} />
        <p className="username">
          <Link to={`/users/${user.id}`}>{user.username}</Link>
        </p>
        <p className="title">
          <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
        </p>
      </div>
      <PlaylistTrackIndex trackIds={playlist.trackIds} />
      <div className="action-buttons">
        {isOwnPlaylist &&
          <button onClick={editPlaylist} className="edit">
            Edit Playlist
          </button>
        }
        <NextUpButton trackIds={playlist.trackIds} />
      </div>
    </div>
  </li>
);

export default playlistIndexItem;
