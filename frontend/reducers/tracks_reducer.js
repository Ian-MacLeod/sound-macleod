import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from "../actions/track_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const trackReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign(
        {},
        {
          [action.payload.track.id]: action.payload.track
        },
        state
      );
    case RECEIVE_TRACKS:
      return Object.assign({}, action.payload.tracks, state);
    case RECEIVE_USER:
      return Object.assign({}, action.payload.tracks, state);
    case REMOVE_TRACK:
      newState = Object.assign({}, state);
      delete newState[action.track.id];
      return newState;
    default:
      return state;
  }
};

export default trackReducer;
