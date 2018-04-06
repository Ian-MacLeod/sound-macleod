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
      <div className="user-profile">
        <div className="profile-splash">
          <div className="img">
            <ImageDefault src={this.props.user.profilePic.url} />
          </div>
          <h1>
            <span className="highlight">{this.props.user.username}</span>
          </h1>
        </div>
        <TrackIndex
          tracks={this.props.tracks}
          showDelete={this.props.isOwnProfile}
        />
      </div>
    );
  }
}

export default UserProfile;
