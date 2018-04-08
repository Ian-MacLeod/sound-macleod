import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";

const CommentIndexItem = ({ comment, user, track }) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <ImageDefault src={user.profilePic.url} />
      </Link>
      <section className="comment-contents">
        <p>
          <Link to={`/users/${user.id}`}>{user.username}</Link>{" "}
          <span>
            on <Link to={`/tracks/${track.id}`}>{track.title}</Link>
          </span>
        </p>
        <p>{comment.body}</p>
      </section>
      <p className="created-at">{comment.createdAt} ago</p>
    </li>
  );
};

export default CommentIndexItem;
