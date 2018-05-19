import { connect } from "react-redux";

import { openModal } from "../../actions/modal_actions";
import EditPlaylistForm from "./form/edit_playlist_form_container";
import PlaylistIndexItem from "./playlist_index_item";

const mapStateToProps = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.playlistId];
  const user = state.entities.users[playlist.userId];
  const isOwnPlaylist = state.session.currentUser.id === user.id;
  return {
    playlist,
    user,
    isOwnPlaylist
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  editPlaylist: () =>
    dispatch(openModal(EditPlaylistForm, { playlistId: ownProps.playlistId }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem);
