import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";

const trackReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, { [action.track.id]: action.tracks });
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.tracks);
    default:
      return state;
  }
};

export default trackReducer;
