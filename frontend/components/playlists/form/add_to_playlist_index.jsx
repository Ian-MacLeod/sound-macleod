import React from "react";

import AddToPlaylistIndexItem from "./add_to_playlist_index_item_container";

class AddToPlaylistIndex extends React.Component {
  render() {
    const { playlistIds, trackId } = this.props;
    if (playlistIds === null) {
      return <div className="loading" />;
    }
    return (
      <ul className="add-to-playlist-index">
        {playlistIds.map(playlistId => (
          <AddToPlaylistIndexItem
            key={playlistId}
            playlistId={playlistId}
            trackId={trackId}
          />
        ))}
      </ul>
    );
  }
}

export default AddToPlaylistIndex;
