import React from "react";

export default ({ isLiked, likeTrack, unlikeTrack }) => (
  <i
    className={"icon like-icon " + (isLiked ? "liked" : "")}
    onClick={isLiked ? unlikeTrack : likeTrack}
  />
);
