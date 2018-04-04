import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";

const trackReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, {
        [action.payload.track.id]: action.payload.track
      });
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.payload.tracks);
    default:
      return state;
  }
};

export default trackReducer;
