import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from "../actions/track_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

const trackReducer = (state = {}, action) => {
  let newState;
  let newTrack;
  switch (action.type) {
    case RECEIVE_TRACK:
      newTrack = action.payload.track;
      if (state.hasOwnProperty(newTrack.id)) {
        newTrack.data = state[newTrack.id].data;
      }
      return Object.assign({}, state, {
        [newTrack.id]: newTrack
      });
    case RECEIVE_TRACKS:
      return Object.assign({}, action.payload.tracks, state);
    case RECEIVE_USER:
      return Object.assign({}, action.payload.tracks, state);
    case REMOVE_TRACK:
      newState = Object.assign({}, state);
      delete newState[action.track.id];
      return newState;
    case RECEIVE_COMMENT:
      const track = state[action.comment.trackId];
      if (track) {
        newTrack = Object.assign({}, track, {
          commentIds: [action.comment.id].concat(track.commentIds)
        });
        return Object.assign({}, state, { [newTrack.id]: newTrack });
      }
      return state;
    default:
      return state;
  }
};

export default trackReducer;
