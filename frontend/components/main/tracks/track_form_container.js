import { connect } from "react-redux";

import { createTrack } from "../../../actions/track_actions";
import { receiveTrackFormErrors } from "../../../actions/error_actions";
import TrackForm from "./track_form";

const mapStateToProps = state => ({
  errors: state.errors.tracks
});

const mapDispatchToProps = dispatch => ({
  action: track => dispatch(createTrack(track)),
  displayErrors: errors => dispatch(receiveTrackFormErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
