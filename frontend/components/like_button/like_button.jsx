import React from "react";

export default ({ isLiked, likeTrack, unlikeTrack, isButtonWrap }) =>
  isButtonWrap ? (
    <div className="button" onClick={isLiked ? unlikeTrack : likeTrack}>
      <i className={"icon like-icon " + (isLiked ? "liked" : "")} />
    </div>
  ) : (
    <i
      className={"icon like-icon " + (isLiked ? "liked" : "")}
      onClick={isLiked ? unlikeTrack : likeTrack}
    />
  );
