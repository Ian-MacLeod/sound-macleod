import { connect } from "react-redux";

import { pausePlayer, playTrack } from "../../actions/player_actions";
import PlayPauseButton from "./play_pause_button";

const mapStateToProps = (state, ownProps) => ({
  type: state.ui.player.playing ? "pause" : "play"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playTrack: () => dispatch(playTrack(ownProps.trackUrl)),
  pausePlayer: () => dispatch(pausePlayer())
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, {
    handleClick:
      stateProps.type === "play"
        ? dispatchProps.playTrack
        : dispatchProps.pausePlayer
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  PlayPauseButton
);
