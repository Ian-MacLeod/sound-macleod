import { connect } from "react-redux";

import { newNextUp, clearNextUp } from "../../actions/player_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import NextUpIndex from "./next_up_index";

const mapStateToProps = state => ({
  trackIds: state.ui.player.nextUp
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  newNextUp: trackIds => dispatch(newNextUp(trackIds)),
  clearNextUp: () => dispatch(clearNextUp()),
  likeTrack: () => dispatch(createLike(ownProps.track.id)),
  unlikeTrack: () => dispatch(deleteLike(ownProps.track.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NextUpIndex);
