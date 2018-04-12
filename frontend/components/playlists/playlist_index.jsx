import React from "react";

import PlaylistIndexItem from "./playlist_index_item_container";

const PlaylistIndex = ({ playlistIds }) => (
  <div className="playlist-index">
    <ul>
      {playlistIds.map(playlistId => (
        <PlaylistIndexItem key={playlistId} playlistId={playlistId} />
      ))}
    </ul>
  </div>
);

export default PlaylistIndex;
