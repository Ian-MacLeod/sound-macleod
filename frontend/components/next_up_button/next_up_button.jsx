import React from "react";

const NextUpButton = ({ addToNextUp, isButtonWrap }) =>
  isButtonWrap ? (
    <div class="button">Add to Next Up</div>
  ) : (
    <button onClick={addToNextUp}>Add to Next Up</button>
  );

export default NextUpButton;
