import React from "react";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";

const IndexItem = ({ user }) => (
  <li>
    <Link className="image" to={`/users/${user.id}`}>
      <ImageDefault src={user.profilePic.url} />
    </Link>
    <div>
      <p>
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </p>
      <p className="num-tracks">
        <Link to={`/users/${user.id}/tracks`}>
          <i className="icon tracks-icon" />
          {user.numTracks} tracks
        </Link>
      </p>
    </div>
  </li>
);

export default IndexItem;
