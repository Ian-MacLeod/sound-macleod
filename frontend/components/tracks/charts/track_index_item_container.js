import { connect } from "react-redux";

import { deleteTrack } from "../../../actions/track_actions";
import { playPausePlayer } from "../../../actions/player_actions";
import TrackIndexItem from "./track_index_item";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId],
  isPlaying:
    state.ui.player.trackId === ownProps.track.id && state.ui.player.playing
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  playPausePlayer: trackId => dispatch(playPausePlayer(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
