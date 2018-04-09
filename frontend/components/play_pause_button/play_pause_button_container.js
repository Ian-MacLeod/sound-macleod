import { connect } from "react-redux";

import { playPausePlayer } from "../../actions/player_actions";
import PlayPauseButton from "./play_pause_button";

const mapStateToProps = (state, ownProps) => ({
  type:
    state.ui.player.playing && ownProps.trackId === state.ui.player.trackId
      ? "pause"
      : "play",
  playerRef: state.ui.player.playerRef
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playPausePlayer: progress =>
    dispatch(playPausePlayer(ownProps.trackId, progress))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const playPause = () => {
    let progress = 0;
    if (stateProps.playerRef) {
      progress =
        stateProps.playerRef.getCurrentTime() /
        stateProps.playerRef.getDuration();
    }
    dispatchProps.playPausePlayer(progress);
  };
  return Object.assign({}, stateProps, ownProps, {
    playPausePlayer: playPause
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  PlayPauseButton
);
