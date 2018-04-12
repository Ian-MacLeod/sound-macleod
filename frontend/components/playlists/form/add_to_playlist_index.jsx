import React from "react";

import AddToPlaylistIndexItem from "./add_to_playlist_index_item_container";

const AddToPlaylistIndex = ({ playlistIds }) => (
  <ul>
    {playlistIds.map(playlistId => (
      <AddToPlaylistIndexItem key={playlistId} playlistId={playlistId} />
    ))}
  </ul>
);

export default AddToPlaylistIndex;
