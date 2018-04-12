import { connect } from "react-redux";

import { updatePlaylist } from "../../../actions/playlist_actions";
import PlaylistForm from "./playlist_form";

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.playlistId]
});

const mapDispatchToProps = dispatch => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
