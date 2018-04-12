import { connect } from "react-redux";

import { fetchPlaylistsForUser } from "../../../actions/playlist_actions";
import AddToPlaylistForm from "./add_to_playlist_form";

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylistsForUser: userId => dispatch(fetchPlaylistsForUser(userId))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  trackId: ownProps.trackId,
  fetchPlaylists: () =>
    dispatchProps.fetchPlaylistsForUser(stateProps.currentUserId)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  AddToPlaylistForm
);
