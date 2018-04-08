import React from "react";

import CommentIndexItem from "./comment_index_item_container";

const CommentIndex = ({ commentIds }) => (
  <ul className="comments">
    {commentIds.map(id => <CommentIndexItem key={id} id={id} />)}
  </ul>
);

export default CommentIndex;
