import React from "react";

import TrackIndex from "../tracks/track_index";

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
          <div class="img" />
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
