import { connect } from "react-redux";

import { fetchPlaylistsForUser } from "../../../actions/playlist_actions";
import AddToPlaylistIndex from "./add_to_playlist_index";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  let playlistIds = null;
  if (state.entities.users.hasOwnProperty(currentUserId)) {
    playlistIds = state.entities.users[currentUserId].playlistIds || null;
  }
  return { playlistIds };
};

export default connect(mapStateToProps)(AddToPlaylistIndex);
