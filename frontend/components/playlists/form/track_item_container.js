import { connect } from "react-redux";

import TrackItem from "./track_item";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.trackId];
  const user = state.entities.users[track.userId];
  return { track, user };
};

export default connect(mapStateToProps)(TrackItem);
