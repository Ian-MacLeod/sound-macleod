import { connect } from "react-redux";

import {
  pausePlayer,
  playTrack,
  playPausePlayer
} from "../../actions/player_actions";
import PlayPauseButton from "./play_pause_button";

const mapStateToProps = (state, ownProps) => ({
  type: state.ui.player.playing ? "pause" : "play"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playPausePlayer: () => dispatch(playPausePlayer(ownProps.trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseButton);
