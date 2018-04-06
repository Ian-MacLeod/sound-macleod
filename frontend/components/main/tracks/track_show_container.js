import { connect } from "react-redux";

import TrackShow from "./track_show";
import { fetchTrack } from "../../../actions/track_actions";
import { playTrack, pausePlayer } from "../../../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.trackId];
  let user = {};
  if (track) {
    user = state.entities.users[track.userId];
  }
  return {
    track,
    user,
    playing: state.ui.player.playing
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.trackId)),
  playTrack: trackUrl => dispatch(playTrack(trackUrl)),
  pausePlayer: () => dispatch(pausePlayer)
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
