import React from "react";

import { Link } from "react-router-dom";
import TrackIndex from "../tracks/small/track_index_container";

const LikeIndex = ({ trackIds, numToShow, linkTo }) => {
  if (!trackIds) return "";
  const numLikes = trackIds.length;
  if (numToShow) {
    trackIds = trackIds.slice(0, numToShow);
  }
  return (
    <section className="likes-index">
      <header>
        <Link to={linkTo}>
          <h2>
            <i className="like-icon grey icon" />
            {numLikes} likes
          </h2>
          <p className="view-all">View all</p>
        </Link>
      </header>
      <TrackIndex trackIds={trackIds} />
    </section>
  );
};

export default LikeIndex;
