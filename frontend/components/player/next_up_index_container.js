import { connect } from "react-redux";

import { newNextUp } from "../../actions/player_actions";
import NextUpIndex from "./next_up_index";

const mapStateToProps = state => ({
  trackIds: state.ui.player.nextUp
});

const mapDispatchToProps = dispatch => ({
  newNextUp: trackIds => dispatch(newNextUp(trackIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(NextUpIndex);
