import React from "react";

import { Link } from "react-router-dom";

import ImageDefault from "../image_default";
import NextUpIndex from "./next_up_index_container";

class PlayerTrackDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nextUpShowing: false };
    this.toggleNextUpShow = this.toggleNextUpShow.bind(this);
  }

  toggleNextUpShow(e) {
    this.setState({ nextUpShowing: !this.state.nextUpShowing });
  }

  render() {
    const { track, user, nextUp } = this.props;
    return (
      <div className="track-details">
        <div className="track-image">
          <ImageDefault src={track.image.url} />
        </div>
        <div className="info">
          <p className="username">
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </p>
          <p className="title">
            <Link to={`/tracks/${track.id}`}>{track.title}</Link>
          </p>
        </div>
        <div className="buttons">
          <div className="next-up">
            <svg
              onClick={this.toggleNextUpShow}
              className={
                "next-up-icon " + (this.state.nextUpShowing && "active")
              }
            >
              <path
                fill="#333"
                d="M6 11h12v2H6zM6 7h8v2H6zM6 15h12v2H6zM16 3v6l4-3z"
              />
            </svg>
            <NextUpIndex
              track={track}
              user={user}
              showing={this.state.nextUpShowing}
              toggleShow={this.toggleNextUpShow}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerTrackDetails;
