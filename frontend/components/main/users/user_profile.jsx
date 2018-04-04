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
      <div>
        <div className="profile-splash">
          <h1>{this.props.user.username}</h1>
        </div>
        <TrackIndex tracks={this.props.tracks} />
      </div>
    );
  }
}

export default UserProfile;
