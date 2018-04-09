import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";

const CommentIndexItem = ({ comment, user, track, forPage }) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <ImageDefault src={user.profilePic.url} />
      </Link>
      <section className="comment-contents">
        <div className="title">
          <p>
            <Link to={`/users/${user.id}`}>{user.username}</Link> {}
            {forPage !== "track" && (
              <span>
                on <Link to={`/tracks/${track.id}`}>{track.title}</Link>
              </span>
            )}
          </p>
          <p className="created-at">{comment.createdAt}</p>
        </div>
        <p>{comment.body}</p>
      </section>
    </li>
  );
};

export default CommentIndexItem;
