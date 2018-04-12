import { connect } from "react-redux";

import PlaylistTrackIndexItem from "./playlist_track_index_item";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.trackId];
  const user = state.entities.users[track.userId];
  const isPlaying =
    state.ui.player.isPlaying && state.ui.player.trackId === track.id;
  return { track, user, isPlaying };
};

export default connect(mapStateToProps)(PlaylistTrackIndexItem);
