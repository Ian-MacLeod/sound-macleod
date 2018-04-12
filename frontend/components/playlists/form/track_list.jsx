import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import { Link } from "react-router-dom";

import TrackItem from "./track_item_container";

const TrackList = SortableContainer(({ trackIds }) => (
  <ol className="playlist-track-index">
    {trackIds.map((id, index) => (
      <TrackItem key={index} index={index} trackNum={index + 1} trackId={id} />
    ))}
  </ol>
));

export default TrackList;
