import { connect } from "react-redux";

import { waveFormSeek, playPausePlayer } from "../../actions/player_actions";
import WaveForm from "./wave_form";

const mapStateToProps = (state, ownProps) => ({
  playing:
    state.ui.player.playing && state.ui.player.trackId === ownProps.track.id,
  lastSeek: state.ui.player.lastPlayerSeek,
  playerRef: state.ui.player.playerRef,
  previousProgress: state.ui.player.progressByTrackId[ownProps.track.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  waveFormSeek: progress => dispatch(waveFormSeek(progress, ownProps.track.id)),
  playPausePlayer: trackId => dispatch(playPausePlayer(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
