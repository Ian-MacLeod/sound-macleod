import { connect } from "react-redux";

import TrackIndex from "./track_index";
import { fetchTracks } from "../../../actions/track_actions";

const mapStateToProps = state => ({
  tracks: Object.values(state.entities.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
