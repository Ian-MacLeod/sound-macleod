import { connect } from "react-redux";

import NextUpIndexItem from "./next_up_index_item";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.trackId];
  const user = state.entities.users[track.userId];
  return { track, user };
};

export default connect(mapStateToProps)(NextUpIndexItem);
