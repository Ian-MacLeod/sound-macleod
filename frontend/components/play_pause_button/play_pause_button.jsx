import React from "react";

export default ({ handleClick, type }) => (
  <div onClick={handleClick} className={"play-pause-button " + type} />
);
