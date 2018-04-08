import React from "react";
import { Link } from "react-router-dom";

import TrackIndex from "../tracks/track_index";
import ImageDefault from "../image_default";
import ImageUploadForm from "../image_upload_form.jsx";
import CommentIndex from "../comments/comment_index";

class UserProfile extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  updateImage(image) {
    this.props.updateUser({ id: this.props.user.id, image: image.file });
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
            {this.props.isOwnProfile ? (
              <ImageUploadForm action={this.updateImage.bind(this)} />
            ) : (
              ""
            )}
          </div>
          <h1>
            <span className="highlight">{this.props.user.username}</span>
          </h1>
        </div>
        <nav className="user-nav">
          <ul>
            <li>All</li>
            <li>Tracks</li>
            <li>Comments</li>
          </ul>
        </nav>
        <div className="info">
          <section>
            <TrackIndex
              tracks={this.props.tracks}
              showDelete={this.props.isOwnProfile}
            />
          </section>
          <aside>
            <CommentIndex
              commentIds={this.props.user.commentIds}
              numToShow={5}
            />
            <p>
              <Link to={`/users/${this.props.user.id}/comments`}>
                See all comments
              </Link>
            </p>
          </aside>
        </div>
      </div>
    );
  }
}

export default UserProfile;
