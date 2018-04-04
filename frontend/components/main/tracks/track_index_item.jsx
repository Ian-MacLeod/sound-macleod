import React from "react";

const TrackIndexItem = ({ track, idx }) => (
  <li>
    <p>{idx}</p>
    <p>{track.name}</p>
    <p>{track.username}</p>
  </li>
);
