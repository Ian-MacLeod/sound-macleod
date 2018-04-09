import { connect } from "react-redux";

import { removeFromNextUp } from "../../actions/player_actions";
import NextUpIndexItem from "./next_up_index_item";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.trackId];
  const user = state.entities.users[track.userId];
  return { track, user };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeFromNextUp: () => dispatch(removeFromNextUp(ownProps.idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(NextUpIndexItem);
