import { connect } from "react-redux";

import { deleteTrack } from "../../../actions/track_actions";
import TrackIndexItem from "./track_index_item";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(deleteTrack(ownProps.track.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
