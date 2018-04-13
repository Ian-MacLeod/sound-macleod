import { connect } from "react-redux";

import PlaylistShow from "./playlist_show";
import { fetchPlaylist } from "../../actions/playlist_actions";

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.playlistId];
  let user = null;
  if (playlist) {
    user = state.entities.users[playlist.userId];
  }
  return {
    playlist,
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylist: () => dispatch(fetchPlaylist(ownProps.match.params.playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
