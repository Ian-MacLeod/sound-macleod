import { connect } from "react-redux";

import { pausePlayer, playerSeek } from "../../actions/player_actions";
import Player from "./player";

const mapStateToProps = state => ({
  player: state.ui.player,
  track: state.entities.tracks[state.ui.player.trackId]
});

const mapDispatchToProps = dispatch => ({
  pausePlayer: () => dispatch(pausePlayer()),
  playerSeek: progress => dispatch(playerSeek(progress))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
