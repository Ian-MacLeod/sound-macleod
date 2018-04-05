import { connect } from "react-redux";

import TrackShow from "./track_show";
import { fetchTrack } from "../../../actions/track_actions";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.trackId];
  let user = {};
  if (track) {
    user = state.entities.users[track.userId];
  }
  return {
    track,
    user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
