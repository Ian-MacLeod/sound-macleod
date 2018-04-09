import React from "react";
import { Link, matchPath } from "react-router-dom";

import ImageDefault from "../image_default";

const LoggedInHeader = ({ location, currentUser, signOut }) => (
  <header className="site-header">
    <div className="content">
      <div id="logo">
        <Link to="/tracks">SoundMacLeod</Link>
      </div>
      <div className="session-buttons">
        <Link
          className={
            matchPath(location.pathname, { path: "/upload" }) ? "active" : ""
          }
          to="/upload"
        >
          Upload
        </Link>
        <Link
          className={
            matchPath(location.pathname, { path: `/users/${currentUser.id}` })
              ? "active"
              : ""
          }
          to={`/users/${currentUser.id}`}
        >
          <ImageDefault
            className="profile-pic"
            src={currentUser.profilePic.url}
          />
          {currentUser.username}
        </Link>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  </header>
);

export default LoggedInHeader;
