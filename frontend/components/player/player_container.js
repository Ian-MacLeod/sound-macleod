import { connect } from "react-redux";

import { startPlayer, pausePlayer } from "../../actions/player_actions";
import Player from "./player";

const mapStateToProps = ({ ui: { player } }) => player;

const mapDispatchToProps = dispatch => ({
  startPlayer: () => dispatch(startPlayer()),
  pausePlayer: () => dispatch(pausePlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
