import React from "react";

import UserIndexItem from "./user_index_item_container";

const UserIndex = ({ userIds }) => (
  <ul className="user-index">
    {userIds.map(id => <UserIndexItem key={id} id={id} />)}
  </ul>
);

export default UserIndex;
