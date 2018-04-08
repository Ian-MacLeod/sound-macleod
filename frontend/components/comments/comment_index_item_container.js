import { connect } from "react-redux";

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

export default connect(mapStateToProps)(CommentIndexItem);
