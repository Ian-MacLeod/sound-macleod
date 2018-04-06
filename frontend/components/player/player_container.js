import { connect } from "react-redux";

import { startPlayer, pausePlayer } from "../../actions/player_actions";
import Player from "./player";

const mapStateToProps = state => ({
  player: state.ui.player,
  track: state.entities.tracks[state.ui.player.trackId]
});

const mapDispatchToProps = dispatch => ({
  startPlayer: () => dispatch(startPlayer()),
  pausePlayer: () => dispatch(pausePlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
