import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from "../actions/track_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {
        [action.payload.user.id]: action.payload.user
      });
    case RECEIVE_TRACK:
      return Object.assign({}, state, {
        [action.payload.user.id]: action.payload.user
      });
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.payload.users);
    case REMOVE_TRACK:
      if (Object.keys(state).includes(action.track.userId.toString())) {
        const user = state[action.track.userId];
        const newTrackIds = user.trackIds.filter(id => id !== action.track.id);
        const newUser = Object.assign({}, user, { trackIds: newTrackIds });

        return Object.assign({}, state, { [action.track.userId]: newUser });
      }
      return state;
    default:
      return state;
  }
};

export default usersReducer;
