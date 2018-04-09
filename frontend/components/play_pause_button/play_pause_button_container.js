import { connect } from "react-redux";

import { playPausePlayer } from "../../actions/player_actions";
import PlayPauseButton from "./play_pause_button";

const mapStateToProps = (state, ownProps) => ({
  type:
    state.ui.player.playing && ownProps.trackId === state.ui.player.trackId
      ? "pause"
      : "play"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playPausePlayer: () => dispatch(playPausePlayer(ownProps.trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseButton);
