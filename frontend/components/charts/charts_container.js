import { connect } from "react-redux";

import { fetchTracks } from "../../actions/track_actions";
import Charts from "./charts";

const mapStateToProps = state => {
  return {
    tracks: Object.values(state.entities.tracks)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
