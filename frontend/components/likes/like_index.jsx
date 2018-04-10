import React from "react";

import TrackIndex from "../tracks/small/track_index_container";

const LikeIndex = ({ trackIds, numToShow, forPage }) => {
  if (!trackIds) return "";
  const numLikes = trackIds.length;
  if (numToShow) {
    trackIds = trackIds.slice(0, numToShow);
  }
  return (
    <section className="likes-index">
      <h2>
        <i className="like-icon grey icon" />
        {numLikes} likes
      </h2>
      <TrackIndex trackIds={trackIds} />
    </section>
  );
};

export default LikeIndex;
