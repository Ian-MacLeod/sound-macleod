import { connect } from "react-redux";

import { createTrack } from "../../../actions/track_actions";
import TrackForm from "./track_form";

const mapDispatchToProps = dispatch => ({
  action: track => dispatch(createTrack(track))
});

export default connect()(TrackForm);
