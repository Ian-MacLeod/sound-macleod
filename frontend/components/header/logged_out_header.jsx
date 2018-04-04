import React from "react";
import { Link } from "react-router-dom";

const LoggedOutHeader = ({ openSignInModal, openSignUpModal }) => (
  <header className="splash">
    <div className="content">
      <div id="logo">
        <Link to="/">SoundMacLeod</Link>
      </div>
      <div className="session-buttons">
        <button className="light" onClick={openSignInModal}>
          Sign in
        </button>
        <button className="colored" onClick={openSignUpModal}>
          Create account
        </button>
      </div>
    </div>
  </header>
);

export default LoggedOutHeader;
