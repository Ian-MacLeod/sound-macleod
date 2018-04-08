import { connect } from "react-redux";

import TrackShow from "./track_show";
import { fetchTrack } from "../../actions/track_actions";

const mapStateToProps = (state, ownProps) => {
  const track = state.entities.tracks[ownProps.match.params.trackId];
  let user = {};
  let commentIds = [];
  if (track) {
    user = state.entities.users[track.userId];
    commentIds = track.commentIds || [];
  }
  return {
    track,
    user,
    commentIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
