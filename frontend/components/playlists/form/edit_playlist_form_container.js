import { connect } from "react-redux";

import PlaylistForm from "./playlist_form";

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.playlistId]
});

export default connect(mapStateToProps)(PlaylistForm);
