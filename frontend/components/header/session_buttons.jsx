import React from "react";
import { Link } from "react-router-dom";

const SessionButtons = ({
  signOut,
  currentUser,
  openSignInModal,
  openSignUpModal
}) =>
  currentUser ? (
    <div className="session-buttons">
      <Link to="/upload">Upload</Link>
      <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  ) : (
    <div className="session-buttons">
      <button className="light" onClick={openSignInModal}>
        Sign in
      </button>
      <button className="colored" onClick={openSignUpModal}>
        Create account
      </button>
    </div>
  );

export default SessionButtons;
