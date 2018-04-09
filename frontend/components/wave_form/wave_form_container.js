import { connect } from "react-redux";

import { waveFormSeek } from "../../actions/player_actions";
import WaveForm from "./wave_form";

const mapStateToProps = (state, ownProps) => ({
  playing:
    state.ui.player.playing && state.ui.player.trackId === ownProps.track.id,
  lastSeek: state.ui.player.lastPlayerSeek
});

const mapDispatchToProps = dispatch => ({
  waveFormSeek: progress => dispatch(waveFormSeek(progress))
});

export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
