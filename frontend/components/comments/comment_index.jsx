import React from "react";

import CommentIndexItem from "./comment_index_item_container";

const CommentIndex = ({ commentIds }) => (
  <section className="comments-index">
    <h2>
      <i className="comment-icon icon" />
      {commentIds.length} Comments
    </h2>
    <ul>{commentIds.map(id => <CommentIndexItem key={id} id={id} />)}</ul>
  </section>
);

export default CommentIndex;
