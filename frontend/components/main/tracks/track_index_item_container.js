import { connect } from "react-redux";

import { deleteTrack } from "../../../actions/track_actions";
import { playTrack } from "../../../actions/player_actions";
import TrackIndexItem from "./track_index_item";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.track.userId],
    isPlaying:
      state.ui.player.trackId === ownProps.track.id && state.ui.player.playing
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(deleteTrack(ownProps.track.id)),
  playTrack: trackId => dispatch(playTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
