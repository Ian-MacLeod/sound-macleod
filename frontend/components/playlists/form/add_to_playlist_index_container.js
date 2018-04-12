import { connect } from "react-redux";

import AddToPlaylistIndex from "./add_to_playlist_index";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const playlistIds = state.entities.users[currentUserId].playlistIds;
  return { playlistIds };
};

export default connect(mapStateToProps)(AddToPlaylistIndex);
