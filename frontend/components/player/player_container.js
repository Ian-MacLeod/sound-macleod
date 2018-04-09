import { connect } from "react-redux";

import {
  pausePlayer,
  playerSeek,
  setPlayerRef
} from "../../actions/player_actions";
import Player from "./player";

const mapStateToProps = state => ({
  player: state.ui.player,
  track: state.entities.tracks[state.ui.player.trackId]
});

const mapDispatchToProps = dispatch => ({
  pausePlayer: () => dispatch(pausePlayer()),
  playerSeek: progress => dispatch(playerSeek(progress)),
  setPlayerRef: playerRef => dispatch(setPlayerRef(playerRef))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
