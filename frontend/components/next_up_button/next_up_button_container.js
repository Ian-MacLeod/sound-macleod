import { connect } from "react-redux";

import { addToNextUp } from "../../actions/player_actions";
import NextUpButton from "./next_up_button";

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToNextUp: dispatch(addToNextUp(ownProps.trackId))
});
