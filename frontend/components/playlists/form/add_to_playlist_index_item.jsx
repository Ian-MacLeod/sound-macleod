import React from "react";

import ImageDefault from "../../image_default";

const AddToPlaylistIndexItem = ({
  playlist,
  trackId,
  addToPlaylist,
  removeFromPlaylist
}) => (
  <li>
    <div className="playlist-img">
      <ImageDefault src={playlist.image.url} />
    </div>
    <div className="details">
      <p>{playlist.title}</p>
      <p className="tracks">
        <i className="icon tracks-icon" />
        {playlist.trackIds.length}
      </p>
    </div>
    {playlist.trackIds.includes(trackId) ? (
      <button onClick={removeFromPlaylist} className="highlight">
        Added
      </button>
    ) : (
      <button onClick={addToPlaylist}>Add to playlist</button>
    )}
  </li>
);

export default AddToPlaylistIndexItem;
