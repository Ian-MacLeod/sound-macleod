import React from "react";
import { Link } from "react-router-dom";

const SessionButtons = ({ signOut, currentUser, openModal }) =>
  currentUser ? (
    <div>
      <Link to="/upload">Upload</Link>
      <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
      <button onClick={signOut}>Sign Out</button>
    </div>
  ) : (
    <div>
      <button onClick={openModal}>Sign In</button>
      <button>Create Account</button>
    </div>
  );

export default SessionButtons;
