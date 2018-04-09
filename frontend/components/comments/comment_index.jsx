import React from "react";

import CommentIndexItem from "./comment_index_item_container";

const CommentIndex = ({ commentIds, numToShow, forPage }) => {
  if (!commentIds) return "";
  const numComments = commentIds.length;
  if (numToShow) {
    commentIds = commentIds.slice(0, numToShow);
  }
  return (
    <section className="comments-index">
      <h2>
        <i className="comment-icon icon" />
        {numComments} comments
      </h2>
      <ul>
        {commentIds.map(id => (
          <CommentIndexItem key={id} id={id} forPage={forPage} />
        ))}
      </ul>
    </section>
  );
};

export default CommentIndex;
