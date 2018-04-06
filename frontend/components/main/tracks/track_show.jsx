import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../../image_default";
import PlayPauseButton from "../../play_pause_button_container";

class TrackShow extends React.Component {
  componentWillMount() {
    this.props.fetchTrack();
  }

  render() {
    const { track, user, playing, playPause } = this.props;
    if (!track || !user) {
      return <div className="loading" />;
    }
    return (
      <div className="track-show">
        <div className="track-splash">
          <div className="splash-left">
            <div className="top-info">
              <div className="play-info">
                <PlayPauseButton trackUrl={track.data.url} />
                <div className="username">
                  <Link className="highlight" to={`/api/users/${user.id}`}>
                    {user.username}
                  </Link>
                </div>
                <div className="title">
                  <span className="highlight">{track.title}</span>
                </div>
              </div>
              <div className="created-at">{track.createdAt} ago</div>
            </div>
          </div>
          <div className="splash-right">
            <div className="img">
              <ImageDefault src={track.image.url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackShow;
