import React from "react";

import TrackIndex from "../tracks/track_index";
import ImageDefault from "../../image_default";

class UserProfile extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.user === undefined) {
      return <div className="loading" />;
    }
    return (
      <div class="user-profile">
        <div className="profile-splash">
          <div class="img">
            <ImageDefault src={this.props.user.profilePic.url} />
          </div>
          <h1>
            <span class="highlight">{this.props.user.username}</span>
          </h1>
        </div>
        <TrackIndex tracks={this.props.tracks} />
      </div>
    );
  }
}

export default UserProfile;
