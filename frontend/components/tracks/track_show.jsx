import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";
import PlayPauseButton from "../play_pause_button/play_pause_button_container";
import CommentForm from "../comments/comment_form_container.js";
import CommentIndex from "../comments/comment_index";
import WaveForm from "../wave_form/wave_form_container";

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchTrack();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.trackId !== nextProps.match.params.trackId) {
      nextProps.fetchTrack();
    }
  }

  render() {
    const { track, user, commentIds } = this.props;
    if (!track || !user) {
      return <div className="loading" />;
    }
    return (
      <div className="track-show">
        <div className="track-splash">
          <div className="splash-left">
            <div className="top-info">
              <div className="play-info">
                <PlayPauseButton trackId={track.id} />
                <div className="username">
                  <Link className="highlight" to={`/users/${user.id}`}>
                    {user.username}
                  </Link>
                </div>
                <div className="title">
                  <span className="highlight">{track.title}</span>
                </div>
              </div>
              <div className="created-at">{track.createdAt} ago</div>
            </div>
            <WaveForm track={track} height={100} waveColor="#fff" />
          </div>
          <div className="splash-right">
            <div className="img">
              <ImageDefault src={track.image.url} />
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
          <section className="comments-details">
            <CommentForm trackId={track.id} />
            <CommentIndex commentIds={commentIds} forPage="track" />
          </section>
        </section>
      </div>
    );
  }
}

export default TrackShow;
