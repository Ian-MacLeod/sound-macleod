import React from "react";
import SessionButtons from "./session_buttons_container";

const LoggedInHeader = () => (
  <header>
    <div className="content">
      <div id="logo">SoundMacLeod</div>
      <SessionButtons />
    </div>
  </header>
);

export default LoggedInHeader;
