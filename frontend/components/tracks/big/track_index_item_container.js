import { connect } from "react-redux";

import { deleteTrack } from "../../../actions/track_actions";
import { addToNextUp } from "../../../actions/player_actions";
import { createLike, deleteLike } from "../../../actions/like_actions";
import { openModal } from "../../../actions/modal_actions";
import { signInDemoUser } from "../../../actions/session_actions";
import AddToPlaylistForm from "../../playlists/form/add_to_playlist_form_container";
import TrackIndexItem from "./track_index_item";
import SignUpModal from "../../modal/sign_up_modal_container.js";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId],
  isPlaying:
    state.ui.player.trackId === ownProps.track.id && state.ui.player.playing,
  isLoggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(deleteTrack(ownProps.track.id)),
  addToNextUp: () => dispatch(addToNextUp([ownProps.track.id])),
  likeTrack: () => dispatch(createLike(ownProps.track.id)),
  unlikeTrack: () => dispatch(deleteLike(ownProps.track.id)),
  addToPlaylist: () =>
    dispatch(openModal(AddToPlaylistForm, { trackId: ownProps.track.id })),
  openSignUpModal: () => dispatch(openModal(SignUpModal)),
  signInDemoUser: () => dispatch(signInDemoUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
