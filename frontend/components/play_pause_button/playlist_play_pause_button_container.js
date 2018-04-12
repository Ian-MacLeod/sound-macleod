import { connect } from "react-redux";

import { playPausePlayer, newNextUp } from "../../actions/player_actions";
import PlayPauseButton from "./play_pause_button";

const mapStateToProps = (state, ownProps) => {
  return {
    type:
      state.ui.player.playing &&
      ownProps.playlistId === state.ui.player.currentPlaylistId
        ? "pause"
        : "play",
    trackIds: state.entities.playlists[ownProps.playlistId].trackIds,
    playerRef: state.ui.player.playerRef
  };
};

const mapDispatchToProps = dispatch => ({
  playPausePlayer: (progress, trackIds, playlistId) => {
    dispatch(playPausePlayer(trackIds[0], progress, playlistId));
    dispatch(newNextUp(trackIds.slice(1) || []));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const playPause = () => {
    let progress = 0;
    if (stateProps.playerRef) {
      progress =
        stateProps.playerRef.getCurrentTime() /
        stateProps.playerRef.getDuration();
    }

    dispatchProps.playPausePlayer(
      progress,
      stateProps.trackIds,
      ownProps.playlistId
    );
  };
  return Object.assign({}, stateProps, ownProps, {
    playPausePlayer: playPause
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  PlayPauseButton
);
