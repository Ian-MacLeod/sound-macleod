import { connect } from "react-redux";

import { updatePlaylist } from "../../../actions/playlist_actions";
import AddToPlaylistIndexItem from "./add_to_playlist_index_item";

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.playlistId]
});

const mapDispatchToProps = (dispatch, { trackId, playlistId }) => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist))
});

const mergeProps = ({ playlist }, dispatchProps, { trackId }) => {
  const newProps = { trackId, playlist };
  newProps.addToPlaylist = () => {
    const newPlaylist = { id: playlist.id };
    newPlaylist.trackIds = playlist.trackIds.concat([trackId]);
    dispatchProps.updatePlaylist(newPlaylist);
  };
  newProps.removeFromPlaylist = () => {
    const newPlaylist = { id: playlist.id };
    newPlaylist.trackIds = playlist.trackIds.filter(id => id !== trackId);
    dispatchProps.updatePlaylist(newPlaylist);
  };
  return newProps;
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  AddToPlaylistIndexItem
);
