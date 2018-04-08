import React from "react";

import CommentIndexItem from "./comment_index_item_container";

const CommentIndex = ({ commentIds, numToShow }) => {
  if (!commentIds) return "";
  const numComments = commentIds.length;
  if (numToShow) {
    commentIds = commentIds.slice(0, numToShow);
  }
  return (
    <section className="comments-index">
      <h2>
        <i className="comment-icon icon" />
        {numComments} Comments
      </h2>
      <ul>{commentIds.map(id => <CommentIndexItem key={id} id={id} />)}</ul>
    </section>
  );
};

export default CommentIndex;
