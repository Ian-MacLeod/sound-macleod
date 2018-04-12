import { connect } from "react-redux";

import {
  addTrackToPlayist,
  removeTrackFromPlaylist
} from "../../../actions/playlist_actions";
import AddToPlaylistIndexItem from "./add_to_playlist_index_item";

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.playlistId]
});

const mapDispatchToProps = (dispatch, { trackId, playlistId }) => ({
  addToPlaylist: () => dispatch(addTrackToPlayist(trackId, playlistId)),
  removeFromPlaylist: () =>
    dispatch(removeTrackFromPlaylist(trackId, playlistId))
});

export default connect(mapStateToProps)(AddToPlaylistIndexItem);
