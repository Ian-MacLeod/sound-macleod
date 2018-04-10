import React from "react";
import { Link } from "react-router-dom";

import CommentIndexItem from "./comment_index_item_container";

const CommentIndex = ({ commentIds, numToShow, forPage, linkTo }) => {
  if (!commentIds) return "";
  const numComments = commentIds.length;
  if (numToShow) {
    commentIds = commentIds.slice(0, numToShow);
  }
  let header;
  if (forPage === "sidebar") {
    header = (
      <header className="sidebar">
        <Link to={linkTo}>
          <h2>
            <i className="comment-icon icon" />
            {numComments} comments
          </h2>
          <p className="view-all">View all</p>
        </Link>
      </header>
    );
  } else {
    header = (
      <header>
        <h2>
          <i className="comment-icon icon" />
          {numComments} comments
        </h2>
      </header>
    );
  }
  return (
    <section className="comments-index">
      {header}
      <ul>
        {commentIds.map(id => (
          <CommentIndexItem key={id} id={id} forPage={forPage} />
        ))}
      </ul>
    </section>
  );
};

export default CommentIndex;
