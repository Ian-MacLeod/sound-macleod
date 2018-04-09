import React from "react";
import { SortableElement } from "react-sortable-hoc";

import PlayPauseButton from "../play_pause_button/play_pause_button_container";
import ImageDefault from "../image_default";

const NextUpIndexItem = SortableElement(({ track, user }) => (
  <li className="next-up-list-item">
    <div className="image">
      <ImageDefault src={track.image.url} />
      <PlayPauseButton />
    </div>
    <div className="info">
      <p className="title">{track.title}</p>
      <p className="username">{user.username}</p>
    </div>
  </li>
));

export default NextUpIndexItem;
