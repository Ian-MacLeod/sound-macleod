import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";

const CommentIndexItem = ({ comment, user }) => {
  return (
    <li>
      <ImageDefault src={user.profilePic.url} />
      <Link to={`users/${user.id}`}>{user.username}</Link>
      <p>{comment.body}</p>
      <p>{comment.createdAt} ago</p>
    </li>
  );
};

export default CommentIndexItem;
