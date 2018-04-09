import React from "react";
import { SortableElement } from "react-sortable-hoc";

import ImageDefault from "../image_default";

const NextUpIndexItem = SortableElement(({ track, user }) => (
  <li>
    <ImageDefault src={track.data.url} />
    <p>{track.title}</p>
    <p>{user.username}</p>
  </li>
));

export default NextUpIndexItem;
