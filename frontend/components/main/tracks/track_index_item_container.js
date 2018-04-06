import { connect } from "react-redux";

import { deleteTrack } from "../../../actions/track_actions";
import { playTrack } from "../../../actions/player_actions";
import TrackIndexItem from "./track_index_item";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(deleteTrack(ownProps.track.id)),
  playTrack: url => dispatch(playTrack(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
