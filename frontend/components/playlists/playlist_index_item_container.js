import { connect } from "react-redux";

import PlaylistIndexItem from "./playlist_index_item";

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.playlistId];
  const user = state.entities.users[playlist.userId];
  return {
    playlist,
    user
  };
};

export default connect(mapStateToProps)(PlaylistIndexItem);
