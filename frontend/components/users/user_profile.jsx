import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";

import BigTrackIndex from "../tracks/big/track_index";
import ImageDefault from "../image_default";
import ImageUploadForm from "../image_upload_form.jsx";
import CommentIndex from "../comments/comment_index";

class UserProfile extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      nextProps.fetchUser();
    }
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
            <li>
              <NavLink
                activeClassName="selected"
                to={`/users/${this.props.user.id}/tracks`}
              >
                Tracks
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                to={`/users/${this.props.user.id}/comments`}
              >
                Comments
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="main">
          <section>
            <Switch>
              <Route
                path={`/users/${this.props.user.id}/tracks`}
                render={() => (
                  <BigTrackIndex
                    tracks={this.props.tracks}
                    isOwnTrack={this.props.isOwnProfile}
                  />
                )}
              />
              <Route
                path={`/users/${this.props.user.id}/comments`}
                render={() => (
                  <CommentIndex commentIds={this.props.user.commentIds} />
                )}
              />
              <Route
                path={`/users/${this.props.user.id}`}
                render={() => (
                  <BigTrackIndex
                    tracks={this.props.tracks}
                    isOwnTrack={this.props.isOwnProfile}
                  />
                )}
              />
            </Switch>
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
