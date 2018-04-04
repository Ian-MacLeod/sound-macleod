import React from "react";
import { Link } from "react-router-dom";

const LoggedOutHeader = ({
  openSignInModal,
  openSignUpModal,
  signInDemoUser
}) => (
  <header className="splash">
    <div className="content">
      <div id="logo">
        <Link to="/">SoundMacLeod</Link>
      </div>
      <div className="session-buttons">
        <button className="light" onClick={openSignInModal}>
          Sign in
        </button>
        <button className="light" onClick={signInDemoUser}>
          Demo account
        </button>
        <button className="colored" onClick={openSignUpModal}>
          Create account
        </button>
      </div>
    </div>
  </header>
);

export default LoggedOutHeader;
