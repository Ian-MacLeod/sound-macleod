import { connect } from "react-redux";

import TrackIndexItem from "./track_index_item";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId]
});

export default connect(mapStateToProps)(TrackIndexItem);
