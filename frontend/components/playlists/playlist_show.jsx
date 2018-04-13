import React from "react";
import { Link } from "react-router-dom";

import PlayPauseButton from "../play_pause_button/playlist_play_pause_button_container";
import PlaylistIndexItem from "./playlist_index_item_container";
import ImageDefault from "../image_default";

class PlaylistShow extends React.Component {
  componentWillMount() {
    this.props.fetchPlaylist();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.playlistId !== nextProps.match.params.playlistId
    ) {
      nextProps.fetchPlaylist();
    }
  }

  render() {
    const { user, playlist } = this.props;
    if (!playlist || !user) {
      return <div className="loading" />;
    }
    return (
      <div className="track-show">
        <div className="track-splash">
          <div className="splash-left">
            <div className="top-info">
              <div className="play-info">
                <PlayPauseButton playlistId={playlist.id} />
                <div className="username">
                  <Link className="highlight" to={`/users/${user.id}`}>
                    {user.username}
                  </Link>
                </div>
                <div className="title">
                  <span className="highlight">{playlist.title}</span>
                </div>
              </div>
              <div className="created-at">{playlist.createdAt} ago</div>
            </div>
          </div>
          <div className="splash-right">
            <div className="img">
              <ImageDefault src={playlist.image.url} />
            </div>
          </div>
        </div>
        <section className="details">
          <section className="user-details">
            <Link className="image" to={`/users/${user.id}`}>
              <ImageDefault src={user.profilePic.url} />
            </Link>
            <p>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </p>
            <p className="num-tracks">
              <Link to={`/users/${user.id}/tracks`}>
                <i className="icon tracks-icon" />
                {user.numTracks} tracks
              </Link>
            </p>
          </section>
          <section className="playlist-show">
            <div className="playlist-index">
              <ul>
                <PlaylistIndexItem playlistId={playlist.id} />
              </ul>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default PlaylistShow;
