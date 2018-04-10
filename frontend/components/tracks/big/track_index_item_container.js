import { connect } from "react-redux";

import { deleteTrack } from "../../../actions/track_actions";
import { addToNextUp } from "../../../actions/player_actions";
import { createLike, deleteLike } from "../../../actions/like_actions";
import TrackIndexItem from "./track_index_item";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.track.userId],
  isPlaying:
    state.ui.player.trackId === ownProps.track.id && state.ui.player.playing
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTrack: () => dispatch(deleteTrack(ownProps.track.id)),
  addToNextUp: () => dispatch(addToNextUp([ownProps.track.id])),
  likeTrack: () => dispatch(createLike(ownProps.track.id)),
  unlikeTrack: () => dispatch(deleteLike(ownProps.track.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
