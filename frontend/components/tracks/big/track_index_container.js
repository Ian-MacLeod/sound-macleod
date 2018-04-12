import { connect } from "react-redux";

import TrackIndex from "./track_index";

const mapStateToProps = (state, ownProps) => {
  return {
    tracks: ownProps.trackIds.map(id => state.entities.tracks[id])
  };
};

export default connect(mapStateToProps)(TrackIndex);
