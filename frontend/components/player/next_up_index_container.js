import { connect } from "react-redux";

import { newNextUp, clearNextUp } from "../../actions/player_actions";
import NextUpIndex from "./next_up_index";

const mapStateToProps = state => ({
  trackIds: state.ui.player.nextUp
});

const mapDispatchToProps = dispatch => ({
  newNextUp: trackIds => dispatch(newNextUp(trackIds)),
  clearNextUp: () => dispatch(clearNextUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(NextUpIndex);
