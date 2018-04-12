import React from "react";

import PlaylistTrackIndexItem from "./playlist_track_index_item_container.js";

const PlaylistTrackIndex = ({ trackIds }) => (
  <ol className="playlist-track-index">
    {trackIds.map((trackId, idx) => (
      <PlaylistTrackIndexItem
        key={`${idx}-${trackId}`}
        trackNum={idx + 1}
        trackId={trackId}
      />
    ))}
  </ol>
);

export default PlaylistTrackIndex;
