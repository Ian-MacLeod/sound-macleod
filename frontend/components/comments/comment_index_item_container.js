import { connect } from "react-redux";

import { deleteComment } from "../../actions/comment_actions";
import CommentIndexItem from "./comment_index_item";

const mapStateToProps = (state, ownProps) => {
  const comment = state.entities.comments[ownProps.id];
  let user = { profilePic: {} };
  let track = {};
  if (comment) {
    user = state.entities.users[comment.userId];
    track = state.entities.tracks[comment.trackId];
  }
  return {
    comment,
    user,
    track
  };
};

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);
