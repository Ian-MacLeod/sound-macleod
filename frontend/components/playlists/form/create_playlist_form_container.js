import { connect } from "react-redux";

import { createPlaylist } from "../../../actions/playlist_actions";
import { closeModal } from "../../../actions/modal_actions";
import CreatePlaylistForm from "./create_playlist_form";

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(CreatePlaylistForm);
