import { connect } from "react-redux";

import { createLike, deleteLike } from "../../actions/like_actions";
import LikeButton from "./like_button";

const mapStateToProps = (state, ownProps) => ({
  isLiked: state.entities.tracks[ownProps.trackId].isLiked
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  likeTrack: () => dispatch(createLike(ownProps.trackId)),
  unlikeTrack: () => dispatch(deleteLike(ownProps.trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
