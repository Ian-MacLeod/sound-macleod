import { connect } from "react-redux";

import PlayerTrackDetails from "./player_track_details";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId]
});

export default connect(mapStateToProps)(PlayerTrackDetails);
