import { connect } from "react-redux";

import CommentIndexItem from "./comment_index_item";

const mapStateToProps = (state, ownProps) => {
  const comment = state.entities.comments[ownProps.id];
  let user = {};
  if (comment) {
    user = state.entities.users[comment.userId];
  }
  return {
    comment,
    user
  };
};

export default connect(mapStateToProps)(CommentIndexItem);
