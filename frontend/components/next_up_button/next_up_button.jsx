import React from "react";

const NextUpButton = ({ addToNextUp, isButtonWrap }) =>
  isButtonWrap ? (
    <div onClick={addToNextUp} className="button">
      Add to Next Up
    </div>
  ) : (
    <button onClick={addToNextUp}>Add to Next Up</button>
  );

export default NextUpButton;
