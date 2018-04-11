import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";

import BigTrackIndex from "../tracks/big/track_index";
import BigTrackIndexContainer from "../tracks/big/track_index_container";
import ImageDefault from "../image_default";
import ImageUploadForm from "../image_upload_form";
import CommentIndex from "../comments/comment_index";
import LikeIndex from "../likes/like_index";

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

    const { user, isOwnProfile, tracks } = this.props;

    return (
      <div className="user-profile">
        <div className="profile-splash">
          <div className="img">
            <ImageDefault src={user.profilePic.url} />
            {isOwnProfile ? (
              <ImageUploadForm action={this.updateImage.bind(this)} />
            ) : (
              ""
            )}
          </div>
          <h1>
            <span className="highlight">{user.username}</span>
          </h1>
        </div>
        <nav className="user-nav">
          <ul>
            <li>
              <NavLink
                activeClassName="selected"
                to={`/users/${user.id}/tracks`}
              >
                Tracks
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                to={`/users/${user.id}/comments`}
              >
                Comments
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="selected"
                to={`/users/${user.id}/likes`}
              >
                Likes
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="main">
          <section>
            <Switch>
              <Route
                path={`/users/${user.id}/tracks`}
                render={() => (
                  <BigTrackIndex tracks={tracks} isOwnTrack={isOwnProfile} />
                )}
              />
              <Route
                path={`/users/${user.id}/likes`}
                render={() => (
                  <BigTrackIndexContainer trackIds={user.likedTrackIds} />
                )}
              />
              <Route
                path={`/users/${user.id}/comments`}
                render={() => <CommentIndex commentIds={user.commentIds} />}
              />
              <Route
                path={`/users/${user.id}`}
                render={() => (
                  <BigTrackIndex tracks={tracks} isOwnTrack={isOwnProfile} />
                )}
              />
            </Switch>
          </section>
          <aside>
            <nav className="user-stats-nav">
              <Link to={`/users/${user.id}/tracks`}>
                <h3>Tracks</h3>
                <p className="number">{user.numTracks}</p>
              </Link>
              <Link to={`/users/${user.id}/comments`}>
                <h3>Comments</h3>
                <p className="number">
                  {user.commentIds ? user.commentIds.length : " "}
                </p>
              </Link>
            </nav>
            <LikeIndex
              trackIds={user.likedTrackIds}
              numToShow={5}
              linkTo={`/users/${user.id}/likes`}
            />
            <CommentIndex
              commentIds={user.commentIds}
              numToShow={5}
              forPage={"sidebar"}
              linkTo={`/users/${user.id}/comments`}
            />
          </aside>
        </div>
      </div>
    );
  }
}

export default UserProfile;
