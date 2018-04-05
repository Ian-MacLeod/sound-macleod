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
      return Object.assign({}, state, {
        [action.payload.track.id]: action.payload.track
      });
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.payload.tracks);
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.tracks);
    case REMOVE_TRACK:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default trackReducer;
