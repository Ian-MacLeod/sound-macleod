import React from "react";

const AddToPlaylistIndexItem = ({ playlist, trackId }) => (
  <li>
    <ImageDefault src={playlist.data.url} />
    <div className="details">
      <p>{playlist.title}</p>
      <p>{playlist.tracks.length}</p>
    </div>
    <button>Add to playlist</button>
  </li>
);

export default AddToPlaylistIndexItem;
